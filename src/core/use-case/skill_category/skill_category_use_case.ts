import { SkillCategoryService } from '../../services/skill_category/skill_category.service';
import { SkillCategoryGetAllResponse } from '../../dto/skill_category/dto_receive_skill_category_get_all';

export class SkillCategoryUseCase {
  private skillCategoryService: SkillCategoryService;

  constructor() {
    this.skillCategoryService = new SkillCategoryService();
  }

  async getAllSkillCategories(page: number = 1, limit: number = 25): Promise<SkillCategoryGetAllResponse> {
    try {
      const result = await this.skillCategoryService.getAllSkillCategories(page, limit);
      return result;
    } catch (error) {
      console.error('Error en SkillCategoryUseCase.getAllSkillCategories:', error);
      throw error;
    }
  }
}
