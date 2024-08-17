export interface Section {
  section: string;
  index: number;
  backgroundColor?: string;
  color?: string;
  titleBackgroundColor?: string;
  titleTextColor?: string;
  sectionBackgroundColor?: string;
  sectionTextColor?: string;
  sectionStyle?: string;
  sectionTitle?: string;
  sectionName?: string;
  desktopGrids?: string;
  gridWidth?: string;
  mobileGrids?: string;
  limit?: number;
  width?: number;
  height?: number;
  photoPosition?: string;
  photoUrl?: string;
}
export interface RowData {
  id: number;
  backgroundColor: string;
  color: string;
  sections: Section[];
}

export type TPage = {
  title: string;
  description?: string;
  img?: ImageBitmap;
  rowData?: RowData;
  path?: string;
};
