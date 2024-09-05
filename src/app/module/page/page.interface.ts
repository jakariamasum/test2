export type TFileds = {
  value: string;
  label: string;
};
export type TSectionData = {
  sectionTitle: string;
  color: string;
  backgroundColor: string;
  desktopGrid: string;
  mobileGrid: string;
  sectionLimit: string;
  imgPosition?: string;
  width: string;
  box: string;
  categories: TFileds[];
};

export type TRowData = {
  textColor: string;
  bgColor: string;
  id: number;
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
