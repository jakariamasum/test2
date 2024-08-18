export type TCategory = {
  category: string;
  subCategory?: string;
};

export type TVideo = {
  title: string;
  video: string;
  content: string;
  tags: string[];
  category: TCategory;
};
