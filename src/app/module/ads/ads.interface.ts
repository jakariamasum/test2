export type TAds = {
  id: string;
  position: "header" | "category" | "details";
  type: "code" | "images";
  content:
    | string
    | {
        image: string;
        link: string;
      };
};
