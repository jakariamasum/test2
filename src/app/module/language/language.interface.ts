export type TLanguage = {
  title: string;
  language_code: string;
  language_type: "0" | "1";
  link: string;
  status: "active" | "inactive";
  relatedPost: string;
  popularPost: string;
  seeAll: string;
  copyright: string;
  terms: string;
  privacy: string;
  orderPolicy: string;
  htmlBoxes: [string];
};
