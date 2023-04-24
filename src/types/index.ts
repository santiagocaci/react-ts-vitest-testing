export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

export type TUser = {
  picture: {
    large: string;
  };
  name: { first: string; last: string };
  login: { username: string };
};
