import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { BLOG_GENERAL_ROUTES } from '../../../utils/api-const/routes_api';
import { BlogBannersResponse } from '../../dto/blog/dto_receive_banners_get_alls';

/**
 * Servicio para obtener blogs con paginación
 */
export const blogService = {
  /**
   * Obtiene posts del blog con paginación
   */
  async getBlogPosts(page: number = 1, limit: number = 25): Promise<BlogBannersResponse> {
    try {
      const url = `https://cms.yakkasport.com.au/${BLOG_GENERAL_ROUTES.LIST(page, limit)}`;
      console.log('URL generada para página', page, ':', url);
      
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
        throw new Error(`Error al obtener los posts del blog: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      
      // Calcular información de paginación si no viene en la respuesta
      if (data.data && !data.pagination) {
        const total = data.data.length;
        const totalPages = Math.ceil(total / limit);
        data.pagination = {
          page,
          limit,
          total,
          totalPages
        };
      }

      return data;
    } catch (error) {
      console.error('Error en blogService.getBlogPosts:', error);
      throw error;
    }
  },

  /**
   * Obtiene todos los posts del blog (método legacy)
   */
  async getAllBlogPosts(): Promise<BlogBannersResponse> {
    return this.getBlogPosts(1, 25);
  }
};
