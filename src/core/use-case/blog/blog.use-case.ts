import { blogService } from '../../services/blog/blog.service';
import { BlogBannersResponse } from '../../dto/blog/dto_receive_banners_get_alls';

/**
 * Use case para manejar la lógica de negocio del blog
 */
export const blogUseCase = {
  /**
   * Obtiene posts del blog con paginación
   */
  async getBlogPosts(page: number = 1, limit: number = 25): Promise<{ success: boolean; data?: BlogBannersResponse; error?: string }> {
    try {
      const data = await blogService.getBlogPosts(page, limit);
      
      // Validar que la respuesta tenga datos
      if (!data || !data.data) {
        return {
          success: false,
          error: 'No se encontraron posts del blog'
        };
      }

      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error en blogUseCase.getBlogPosts:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido al obtener los posts del blog'
      };
    }
  },

  /**
   * Obtiene todos los posts del blog (método legacy)
   */
  async getAllBlogPosts(): Promise<{ success: boolean; data?: BlogBannersResponse; error?: string }> {
    return this.getBlogPosts(1, 25);
  }
};
