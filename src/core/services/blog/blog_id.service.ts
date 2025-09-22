import { BLOG_GENERAL_ROUTES } from '../../../utils/api-const/routes_api';
import { DtoReceiveBannersGetId } from '../../dto/blog/dto_receive_banners_get_id';

/**
 * Servicio para obtener un blog específico por ID
 */
export const blogIdService = {
  /**
   * Obtiene un post del blog por su ID
   * @param id - ID del blog a obtener
   */
  async getBlogById(id: string): Promise<DtoReceiveBannersGetId> {
    try {
      const url = `https://cms.yakkasport.com.au/${BLOG_GENERAL_ROUTES.DETAIL(id)}`;
      console.log('URL generada para blog ID:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Error al obtener el blog con ID ${id}: ${response.status} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error en blogIdService.getBlogById para ID ${id}:`, error);
      throw error;
    }
  }
};
