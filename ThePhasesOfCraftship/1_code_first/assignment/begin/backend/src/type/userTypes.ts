type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

type NewUserData = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

type EditUserData = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};
