import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { SKILL_SUBCATEGORY_ROUTES } from '../../../utils/api-const/routes_api';
import { SkillSubcategoryGetAllResponse } from '../../dto/skill_subcategory/dto_receive_skill_subcategory_get_all';

export class SkillSubcategoryService {
  private baseUrl = API_BASE_URL;

  async getAllSkillSubcategories(skillCategoryId: number, limit: number = 25): Promise<SkillSubcategoryGetAllResponse> {
    try {
      const url = `${this.baseUrl}/${SKILL_SUBCATEGORY_ROUTES.LIST(skillCategoryId, limit)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener las subcategorías de habilidades: ${response.status}`);
      }

      const data: SkillSubcategoryGetAllResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error en SkillSubcategoryService.getAllSkillSubcategories:', error);
      throw error;
    }
  }
}
