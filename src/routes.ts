export interface Route {
  name: string;
  path: string;
  label: string;
}

export const routes: Route[] = [
  {
    name: 'home',
    path: '/',
    label: 'Home'
  },
  {
    name: 'about-us',
    path: '/about-us',
    label: 'About Us'
  },
  {
    name: 'contact-us',
    path: '/contact-us',
    label: 'Contact Us'
  },
  {
    name: 'blog',
    path: '/blog',
    label: 'Blog'
  }
];

// Función helper para obtener una ruta por nombre
export const getRouteByName = (name: string): Route | undefined => {
  return routes.find(route => route.name === name);
};

// Función helper para obtener una ruta por path
export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find(route => route.path === path);
};
