import {
  createUserModel,
  editUserModel,
  getUserByEmailModel,
} from "../models/userModels";
import {
  createUserView,
  createUserViewError,
  editUserView,
  editUserViewError,
  getUserByEmailView,
  getUserByEmailViewError,
} from "../views/userViews";

export const createUserController = async (newUserData: NewUserData) => {
  try {
    const user = await createUserModel(newUserData);
    return createUserView(user);
  } catch (error) {
    if (error instanceof Error) {
      return createUserViewError(error.message);
    }
    throw error;
  }
};

export const editUserController = async (editUserData: EditUserData) => {
  try {
    const user = await editUserModel(editUserData);
    return editUserView(user);
  } catch (error) {
    if (error instanceof Error) {
      return editUserViewError(error.message);
    }
    throw error;
  }
};

export const getUserByEmailController = async (email: string) => {
  try {
    const user = await getUserByEmailModel(email);
    return getUserByEmailView(user);
  } catch (error) {
    if (error instanceof Error) {
      return getUserByEmailViewError(error.message);
    }
    throw error;
  }
};
