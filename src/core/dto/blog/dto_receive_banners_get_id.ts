export interface Author {
  id: number;
  date_created: string;
  date_updated: string | null;
  name: string;
}

export interface Category {
  id: number;
  date_created: string;
  date_updated: string;
  name: string;
  flavor: number;
}

export interface BannerData {
  id: number;
  date_created: string;
  date_updated: string;
  title: string;
  description: string;
  minute_read: string;
  image: string;
  flavor: number;
  author: Author;
  category: Category;
}

export interface DtoReceiveBannersGetId {
  data: BannerData;
}
