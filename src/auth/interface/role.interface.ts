export enum Role {
  Admin = "admin",
  User = "user",
}

type User = {
  username: string;
  password: string;
  role: Role;
  avatar: string;
};

export interface IAuthenticate {
  user: User;
  token: string;
}