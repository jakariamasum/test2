export interface ILocation {
  city: string;
  area?: string;
}

export interface ICategory {
  category: string;
  subCategory?: string;
}

export interface TNews {
  title: string;
  content: string;
  tags: string[];
  img: string;
  author_id: string;
  location: ILocation;
  category: ICategory;
  language_id?: string;
}
