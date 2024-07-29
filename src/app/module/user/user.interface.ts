export type TUser = {
  title: string;
  password: string;
  email: string;
  role: "reporter" | "admin";
  img?: string;
  bio?: string;
};
