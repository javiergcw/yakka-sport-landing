export interface FooterItem {
  id: number;
  date_created: string;
  date_updated: string;
  name_footer: string;
  flavor: number;
}

export interface FooterResponse {
  data: FooterItem[];
}
