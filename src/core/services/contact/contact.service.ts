import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { CONTACT_WEB_ROUTES } from '../../../utils/api-const/routes_api';
import { DtoFromContactUsCreateSend } from '../../dto/contactUs/send/dto_from_contact_us_create_send';
import { DtoFromContactUsCreateReceive } from '../../dto/contactUs/receive/dto_from_contact_us_create_receive';

export class ContactService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async createContact(data: DtoFromContactUsCreateSend): Promise<DtoFromContactUsCreateReceive> {
    try {
      const response = await fetch(`${this.baseUrl}/${CONTACT_WEB_ROUTES.CREATE()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error creating contact: ${response.status} ${response.statusText}`);
      }

      const result: DtoFromContactUsCreateReceive = await response.json();
      return result;
    } catch (error) {
      console.error('Error in ContactService.createContact:', error);
      throw error;
    }
  }
}
