import { MetaDataService } from '../../services/metaData/meta_data.service';
import { MetaDataResponse, MetaDataItem } from '../../dto/metaData/dto_receive_meta_data_get_all';

export class MetaDataUseCase {
  private metaDataService: MetaDataService;

  constructor() {
    this.metaDataService = new MetaDataService();
  }

  async getMetaData(): Promise<MetaDataResponse> {
    try {
      const result = await this.metaDataService.getMetaData();
      
      // Validar que la respuesta tenga datos
      if (!result.data || result.data.length === 0) {
        throw new Error('No meta data found');
      }

      // Validar que el primer elemento tenga los campos requeridos
      const metaDataItem = result.data[0];
      if (!metaDataItem.title || !metaDataItem.description || !metaDataItem.flavor) {
        throw new Error('Invalid meta data structure');
      }

      return result;
    } catch (error) {
      console.error('Error in MetaDataUseCase.getMetaData:', error);
      throw error;
    }
  }

  async getMetaDataItem(): Promise<MetaDataItem | null> {
    try {
      const response = await this.getMetaData();
      return response.data[0] || null;
    } catch (error) {
      console.error('Error in MetaDataUseCase.getMetaDataItem:', error);
      return null;
    }
  }
}
