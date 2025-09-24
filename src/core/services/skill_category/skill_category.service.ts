import { API_BASE_URL } from '../../../utils/api-const/endpoints';
import { SKILL_CATEGORY_ROUTES } from '../../../utils/api-const/routes_api';
import { SkillCategoryGetAllResponse } from '../../dto/skill_category/dto_receive_skill_category_get_all';

export class SkillCategoryService {
  private baseUrl = API_BASE_URL;

  async getAllSkillCategories(page: number = 1, limit: number = 25): Promise<SkillCategoryGetAllResponse> {
    try {
      const url = `${this.baseUrl}/${SKILL_CATEGORY_ROUTES.LIST(page, limit)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener las categorías de habilidades: ${response.status}`);
      }

      const data: SkillCategoryGetAllResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error en SkillCategoryService.getAllSkillCategories:', error);
      throw error;
    }
  }
}
