export interface SkillCategoryItem {
  id: number;
  name: string;
  flavor_web: number;
}

export interface SkillCategoryGetAllResponse {
  data: SkillCategoryItem[];
}
