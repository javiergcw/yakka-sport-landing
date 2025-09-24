
import { getCurrentFlavor } from '../flavors/current-flavor';
import { FLAVOR_IDS } from '../flavors/settings/model_flavor';

export const BLOG_GENERAL_ROUTES = {
  LIST: (page: number = 1, limit: number = 25) => `items/blog_general_web?limit=${limit}&fields[]=*&fields[]=author.*&fields[]=category.*&sort[]=id&page=${page}&filter[flavor][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}`,
  DETAIL: (id: string) => `items/blog_general_web/${id}?fields[]=*&fields[]=author.*&fields[]=category.*&filter[flavor][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}`,
} as const;

export const BLOG_CATEGORY_ROUTES = {
  LIST: () => `items/blog_category_web?filter[flavor][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}`,
} as const;

export const CONTACT_WEB_ROUTES = {
  CREATE: () => `items/contact_web`
} as const;

export const REGISTER_WEB_ROUTES = {
  CREATE: () => `items/register_web`
} as const;

export const META_DATA_ROUTES = {
  GET: () => `items/meta_data?filter[flavor][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}`
} as const;

export const FOOTER_WEB_ROUTES = {
  GET: () => `items/footer_web?filter[flavor][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}`
} as const;

export const SKILL_CATEGORY_ROUTES = {
  LIST: (page: number = 1, limit: number = 25) => `items/skill_category?limit=${limit}&fields[]=flavor_web&fields[]=name&fields[]=id&sort[]=flavor_web&page=${page}&filter[_and][0][flavor_web][_eq]=${FLAVOR_IDS[getCurrentFlavor()]}&filter[_and][1][status][_neq]=archived`
} as const;

export const SKILL_SUBCATEGORY_ROUTES = {
  LIST: (skillCategoryId: number, limit: number = 25) => `items/skill_subcategory?limit=${limit}&fields[]=name&sort[]=id&filter[_and][0][skill_Category][_eq]=${skillCategoryId}&filter[_and][1][status][_neq]=archive`
} as const;