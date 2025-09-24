import { blogIdService } from '../../services/blog/blog_id.service';
import { DtoReceiveBannersGetId } from '../../dto/blog/dto_receive_banners_get_id';

/**
 * Use case para manejar la lógica de negocio del blog por ID
 */
export const blogIdUseCase = {
  /**
   * Obtiene un post del blog por ID con manejo de errores
   * @param id - ID del blog a obtener
   */
  async getBlogById(id: string): Promise<{ success: boolean; data?: DtoReceiveBannersGetId; error?: string }> {
    try {
      // Validar que el ID no esté vacío
      if (!id || id.trim() === '') {
        return {
          success: false,
          error: 'El ID del blog es requerido'
        };
      }

      const data = await blogIdService.getBlogById(id);
      
      // Validar que la respuesta tenga datos
      if (!data || !data.data) {
        return {
          success: false,
          error: `No se encontró el blog con ID: ${id}`
        };
      }

      return {
        success: true,
        data
      };
    } catch (error) {
      console.error(`Error en blogIdUseCase.getBlogById para ID ${id}:`, error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : `Error desconocido al obtener el blog con ID: ${id}`
      };
    }
  }
};
