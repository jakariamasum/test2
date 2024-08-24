export type TSectionData = {
  sectionTitle: string;
  color: string;
  backgroundColor: string;
  desktopGrid: string;
  mobileGrid: string;
  sectionLimit: string;
  imgPosition?: string;
};

export type TRowData = {
  color: string;
  backgroundColor: string;
  index: number;
  sections: TSectionData[];
};

export type TPage = {
  title: string;
  description: string;
  img: string;
  rows: TRowData[];
  language: string;
  path: string;
};
