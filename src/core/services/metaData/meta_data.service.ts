import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { META_DATA_ROUTES } from '../../../utils/api-const/routes_api';
import { MetaDataResponse } from '../../dto/metaData/dto_receive_meta_data_get_all';

export class MetaDataService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async getMetaData(): Promise<MetaDataResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${META_DATA_ROUTES.GET()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching meta data: ${response.status} ${response.statusText}`);
      }

      const result: MetaDataResponse = await response.json();
      return result;
    } catch (error) {
      console.error('Error in MetaDataService.getMetaData:', error);
      throw error;
    }
  }
}
