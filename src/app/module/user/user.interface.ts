export interface TUser {
  _id: string;
  title: string;
  password: string;
  email: string;
  role: "reporter" | "admin";
  img?: string;
  bio?: string;
}
