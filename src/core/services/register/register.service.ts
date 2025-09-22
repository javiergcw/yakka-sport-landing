import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { REGISTER_WEB_ROUTES } from '../../../utils/api-const/routes_api';
import { DtoSendRegisterCreate } from '../../dto/register/send/dto_send_register_create';
import { DtoReceiveRegisterCreate } from '../../dto/register/receive/dto_receive_register_create';

export class RegisterService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async createRegister(data: DtoSendRegisterCreate): Promise<DtoReceiveRegisterCreate> {
    try {
      const response = await fetch(`${this.baseUrl}/${REGISTER_WEB_ROUTES.CREATE()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error creating register: ${response.status} ${response.statusText}`);
      }

      const result: DtoReceiveRegisterCreate = await response.json();
      return result;
    } catch (error) {
      console.error('Error in RegisterService.createRegister:', error);
      throw error;
    }
  }
}
