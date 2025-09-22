export interface BlogCategory {
  id: number;
  date_created: string;
  date_updated: string;
  name: string;
  flavor: number;
}

export interface DtoReceiveCategoriesGetAll {
  data: BlogCategory[];
}
