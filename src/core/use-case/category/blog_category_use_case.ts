import { blogCategoryService } from '../../services/category/blog_category.service';
import { DtoReceiveCategoriesGetAll } from '../../dto/category/dto_receive_categories_get_all';

/**
 * Use case para manejar la lógica de negocio de las categorías de blog
 */
export const blogCategoryUseCase = {
  /**
   * Obtiene todas las categorías de blog con manejo de errores
   */
  async getAllCategories(): Promise<{ success: boolean; data?: DtoReceiveCategoriesGetAll; error?: string }> {
    try {
      const data = await blogCategoryService.getAllCategories();
      
      // Validar que la respuesta tenga datos
      if (!data || !data.data || !Array.isArray(data.data)) {
        return {
          success: false,
          error: 'No se encontraron categorías de blog'
        };
      }

      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error en blogCategoryUseCase.getAllCategories:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido al obtener las categorías de blog'
      };
    }
  }
};
