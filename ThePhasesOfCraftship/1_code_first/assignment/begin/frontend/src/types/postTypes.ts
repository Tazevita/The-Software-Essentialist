export type PostType = {
  id: number;
  title: string;
  datePosted: Date;
  postContent: string;
  likes: number;
  dislikes: number;
  posterUsername: string;
  userId: number | null;
  score: number;
  commentCount: number;
};

export type PostTypeApiRes = {
  success: boolean;
  data: PostType[];
  error: string | undefined;
};
// type Comment = {

// }
