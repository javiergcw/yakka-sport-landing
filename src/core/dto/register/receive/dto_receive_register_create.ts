export interface RegisterData {
  id: number;
  date_created: string;
  date_updated: string | null;
  role: string;
  name: string;
  email: string;
  phone: string;
  flavor: number;
  profession: string | null;
  workers: string;
}

export interface DtoReceiveRegisterCreate {
  data: RegisterData;
}
