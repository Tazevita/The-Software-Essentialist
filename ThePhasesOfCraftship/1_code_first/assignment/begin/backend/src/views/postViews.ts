import { PostType, PostTypeExtra } from "../type/postTypes";

export const getPopularPostsView = (posts: PostTypeExtra[]) => {
  return {
    status: 200,
    json: {
      error: undefined,
      data: posts,
      success: true,
    },
  };
};

export const getPopularPostsViewError = (errorMessage: string) => {
  return {
    status: 400,
    json: {
      error: errorMessage,
      data: undefined,
      success: false,
    },
  };
};

export const getNewPostsView = (posts: PostType[]) => {
  return {
    status: 200,
    json: {
      error: undefined,
      data: posts,
      success: true,
    },
  };
};

export const getNewPostsViewError = (errorMessage: string) => {
  return {
    status: 400,
    json: {
      error: errorMessage,
      data: undefined,
      success: false,
    },
  };
};
