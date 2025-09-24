import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { FOOTER_WEB_ROUTES } from '../../../utils/api-const/routes_api';
import { FooterResponse } from '../../dto/footer/dto_receive_footer_get_all';

export class FooterService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getFooter(): Promise<FooterResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${FOOTER_WEB_ROUTES.GET()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching footer: ${response.status} ${response.statusText}`);
      }

      const result: FooterResponse = await response.json();
      return result;
    } catch (error) {
      console.error('Error in FooterService.getFooter:', error);
      throw error;
    }
  }
}
