export interface ContactUsData {
  id: number;
  date_created: string;
  date_updated: string | null;
  name: string;
  email: string;
  subject: string;
  message: string;
  flavor: number;
}

export interface DtoFromContactUsCreateReceive {
  data: ContactUsData;
}
