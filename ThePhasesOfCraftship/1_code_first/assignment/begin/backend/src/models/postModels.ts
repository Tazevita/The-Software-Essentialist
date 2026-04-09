import { prisma } from "../lib/prisma";
import { PostTypeExtra } from "../type/postTypes";

type RawPostRow = {
  id: bigint;
  title: string;
  datePosted: Date;
  postContent: string;
  posterUsername: string;
  userId: bigint;
  username: string;
  commentCount: bigint;
  likes: bigint;
  dislikes: bigint;
};

const mapRow = (row: RawPostRow): PostTypeExtra => ({
  id: Number(row.id),
  title: row.title,
  datePosted: row.datePosted,
  postContent: row.postContent,
  likes: Number(row.likes),
  dislikes: Number(row.dislikes),
  userId: Number(row.userId),
  posterUsername: row.username,
  commentCount: Number(row.commentCount),
});

const buildPostQuery = (orderBy: string, limit: number) => `
  WITH
    comment_counts AS (
      SELECT postId, COUNT(id) AS commentCount
      FROM Comment
      GROUP BY postId
    ),
    vote_counts AS (
      SELECT
        postId,
        COUNT(CASE WHEN isLike = 1 THEN 1 END) AS likes,
        COUNT(CASE WHEN isLike = 0 THEN 1 END) AS dislikes
      FROM PostVotes
      GROUP BY postId
    )
  SELECT
    p.id,
    p.title,
    p.datePosted,
    p.postContent,
    p.posterUsername,
    p.userId,
    u.username,
    COALESCE(cc.commentCount, 0) AS commentCount,
    COALESCE(vc.likes, 0)        AS likes,
    COALESCE(vc.dislikes, 0)     AS dislikes
  FROM Post p
  JOIN User u ON u.id = p.userId
  LEFT JOIN comment_counts cc ON cc.postId = p.id
  LEFT JOIN vote_counts vc    ON vc.postId = p.id
  ORDER BY ${orderBy}
  LIMIT ${limit}
`;

export const getPopularPostsModel = async (
  postsLimitCount: number,
): Promise<PostTypeExtra[]> => {
  const rows = await prisma.$queryRawUnsafe<RawPostRow[]>(
    buildPostQuery(
      "(COALESCE(vc.likes, 0) - COALESCE(vc.dislikes, 0)) DESC",
      postsLimitCount,
    ),
  );
  return rows.map(mapRow);
};

export const getNewPostsModel = async (
  postsLimitCount: number,
): Promise<PostTypeExtra[]> => {
  const rows = await prisma.$queryRawUnsafe<RawPostRow[]>(
    buildPostQuery("p.datePosted DESC", postsLimitCount),
  );
  return rows.map(mapRow);
};
