import { getNewPostsModel, getPopularPostsModel } from "../models/postModels";
import {
  getNewPostsView,
  getNewPostsViewError,
  getPopularPostsView,
  getPopularPostsViewError,
} from "../views/postViews";

export const getPopularPostsController = async (postsLimitCount: number) => {
  try {
    const posts = await getPopularPostsModel(postsLimitCount);
    return getPopularPostsView(posts);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return getPopularPostsViewError(error.message);
    }
    throw error;
  }
};

export const getNewPostsController = async (postsLimitCount: number) => {
  try {
    const posts = await getNewPostsModel(postsLimitCount);
    return getNewPostsView(posts);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return getNewPostsViewError(error.message);
    }
    throw error;
  }
};
