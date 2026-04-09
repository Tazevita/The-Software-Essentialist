export type PostType = {
  id: number;
  title: string;
  datePosted: Date;
  postContent: string;
  likes: number;
  dislikes: number;
  userId: number;
};

export type PostTypeExtra = {
  id: number;
  title: string;
  datePosted: Date;
  postContent: string;
  likes: number;
  dislikes: number;
  userId: number;
  commentCount: number;
  posterUsername: string;
};
