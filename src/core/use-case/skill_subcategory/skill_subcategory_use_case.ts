import { SkillSubcategoryService } from '../../services/skill_subcategory/skill_subcategory.service';
import { SkillSubcategoryGetAllResponse } from '../../dto/skill_subcategory/dto_receive_skill_subcategory_get_all';

export class SkillSubcategoryUseCase {
  private skillSubcategoryService: SkillSubcategoryService;

  constructor() {
    this.skillSubcategoryService = new SkillSubcategoryService();
  }

  async getAllSkillSubcategories(skillCategoryId: number, limit: number = 25): Promise<SkillSubcategoryGetAllResponse> {
    try {
      const result = await this.skillSubcategoryService.getAllSkillSubcategories(skillCategoryId, limit);
      return result;
    } catch (error) {
      console.error('Error en SkillSubcategoryUseCase.getAllSkillSubcategories:', error);
      throw error;
    }
  }
}
