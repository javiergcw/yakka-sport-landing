export interface DtoSendRegisterCreate {
  role: string;
  name: string;
  email: string;
  phone: string;
  flavor: number;
  profession: string | null;
  workers: string;
}
