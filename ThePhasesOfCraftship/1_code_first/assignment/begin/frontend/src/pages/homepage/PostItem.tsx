import arrowSvg from "@/assets/arrow.svg";
import type { PostType } from "@/types/postTypes";

function PostItem({ post }: { post: PostType }) {
  const timeAgo = (date: Date | string): string => {
    const now = Date.now() + 7 * 3600 * 1000;
    const past = new Date(date).getTime();
    const seconds = Math.floor((now - past) / 1000);

    if (seconds < 0) return "just now";

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  return (
    <div className="post-item">
      <div className="post-item-votes">
        <div className="post-item-upvote">
          <img src={arrowSvg} />
        </div>

        <div>{post.likes - post.dislikes}</div>

        <div className="post-item-downvote">
          <img src={arrowSvg} />
        </div>
      </div>

      <div className="post-item-content">
        <div className="post-item-title">{post.title}</div>

        <div className="post-item-details">
          <div>{timeAgo(post.datePosted)}</div>
          <a href="/member/username"> by {post.posterUsername} </a>
          <div>{post.commentCount} comments</div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
