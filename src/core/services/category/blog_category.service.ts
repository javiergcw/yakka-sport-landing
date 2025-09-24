import { BLOG_CATEGORY_ROUTES } from '../../../utils/api-const/routes_api';
import { DtoReceiveCategoriesGetAll } from '../../dto/category/dto_receive_categories_get_all';

/**
 * Servicio para obtener las categorías de blog
 */
export const blogCategoryService = {
  /**
   * Obtiene todas las categorías de blog
   */
  async getAllCategories(): Promise<DtoReceiveCategoriesGetAll> {
    try {
      const url = `https://cms.yakkasport.com.au/${BLOG_CATEGORY_ROUTES.LIST()}`;
      console.log('URL generada para categorías de blog:', url);
      
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
        throw new Error(`Error al obtener las categorías de blog: ${response.status} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error en blogCategoryService.getAllCategories:', error);
      throw error;
    }
  }
};
