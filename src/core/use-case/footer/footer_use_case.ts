import { FooterService } from '../../services/footer/footer.service';
import { FooterResponse } from '../../dto/footer/dto_receive_footer_get_all';

export class FooterUseCase {
  private footerService: FooterService;

  constructor() {
    this.footerService = new FooterService();
  }

  async getFooter(): Promise<FooterResponse> {
    try {
      const result = await this.footerService.getFooter();
      
      // Validar que la respuesta tenga datos
      if (!result.data || result.data.length === 0) {
        throw new Error('No footer data found');
      }

      // Validar que el primer elemento tenga los campos requeridos
      const footerItem = result.data[0];
      if (!footerItem.name_footer || !footerItem.flavor) {
        throw new Error('Invalid footer data structure');
      }

      return result;
    } catch (error) {
      console.error('Error in FooterUseCase.getFooter:', error);
      throw error;
    }
  }
}
