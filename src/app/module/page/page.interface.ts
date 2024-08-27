import { ObjectId } from "mongoose";

export type TSectionData = {
  sectionTitle: ObjectId;
  color: string;
  backgroundColor: string;
  desktopGrid: string;
  mobileGrid: string;
  sectionLimit: string;
  imgPosition?: string;
  width: string;
  box: string;
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
