
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
  CREATE: () => `contact_web`
} as const;

export const REGISTER_WEB_ROUTES = {
  CREATE: () => `register_web`
} as const;