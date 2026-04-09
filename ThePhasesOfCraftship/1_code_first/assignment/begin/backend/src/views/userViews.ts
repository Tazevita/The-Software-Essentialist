const successView = (user: User, statusNum: number) => {
  return {
    status: statusNum,
    json: {
      error: undefined,
      data: user,
      success: true,
    },
  };
};

const errorView = (errorMessage: string, statusNum: number) => {
  return {
    status: statusNum,
    json: {
      error: errorMessage,
      data: undefined,
      success: false,
    },
  };
};

export const createUserView = (user: User) => {
  return successView(user, 201);
};
export const createUserViewError = (errorMessage: string) => {
  if (
    errorMessage === "UsernameAlreadyTaken" ||
    errorMessage === "EmailAlreadyInUse"
  ) {
    return errorView(errorMessage, 409);
  } else if (errorMessage === "ValidationError") {
    return errorView(errorMessage, 400);
  } else {
    return errorView("ServerError", 500);
  }
};

export const editUserView = (user: User) => {
  return successView(user, 200);
};

export const editUserViewError = (errorMessage: string) => {
  if (errorMessage === "ValidationError") {
    return errorView(errorMessage, 400);
  } else if (errorMessage === "UserNotFound") {
    return errorView(errorMessage, 404);
  } else if (
    errorMessage === "EmailAlreadyInUse" ||
    errorMessage === "UsernameAlreadyTaken"
  ) {
    return errorView(errorMessage, 409);
  } else {
    return errorView("ServerError", 500);
  }
};

export const getUserByEmailView = (user: User) => {
  return successView(user, 200);
};

export const getUserByEmailViewError = (errorMessage: string | unknown) => {
  if (errorMessage === "UserNotFound") {
    return errorView(errorMessage, 404);
  } else {
    return errorView("ServerError", 500);
  }
};
