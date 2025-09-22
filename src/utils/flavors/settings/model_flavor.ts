// Enum de flavors
export enum Flavor {
  SPORT = 'sport',
  LABOUR = 'labour',
}


export const FLAVOR_IDS = {
  [Flavor.SPORT]: 1,
  [Flavor.LABOUR]: 2,
} as const;


export interface FlavorLogo {
  main: string;        // Logo principal
  icon: string;        // Icono pequeño
  favicon: string;     // Favicon
  alt: string;         // Texto alternativo
}

export interface FlavorColors {
  primary: string;           // Color primario
  secondary: string;         // Color secundario
  accent: string;           // Color de acento
  background: string;       // Color de fondo
  surface: string;          // Color de superficie
  text: {
    primary: string;        // Texto principal
    secondary: string;      // Texto secundario
    disabled: string;       // Texto deshabilitado
  };
  button: {
    primary: string;        // Botón primario
    primaryHover: string;   // Hover del botón primario
    secondary: string;      // Botón secundario
    secondaryHover: string; // Hover del botón secundario
  };
  border: string;           // Color de bordes
  shadow: string;           // Color de sombras
  gradient: {
    primary: string;        // Gradiente primario
    secondary: string;      // Gradiente secundario
  };
}

export interface FlavorTypography {
  fontFamily: {
    primary: string;        // Fuente principal
    secondary: string;      // Fuente secundaria
  };
  fontSize: {
    xs: string;            // Tamaño extra pequeño
    sm: string;            // Tamaño pequeño
    md: string;            // Tamaño medio
    lg: string;            // Tamaño grande
    xl: string;            // Tamaño extra grande
    xxl: string;           // Tamaño extra extra grande
  };
  fontWeight: {
    light: number;         // Peso ligero
    normal: number;        // Peso normal
    medium: number;        // Peso medio
    bold: number;          // Peso bold
  };
}

export interface FlavorImages {
  hero: string;            // Imagen del hero
  gallery: string[];       // Array de imágenes para galería
  background: string;      // Imagen de fondo
  icons: {
    [key: string]: string; // Iconos específicos del flavor
  };
}

export interface FlavorContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    avatar: string;
  }>;
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface FlavorAnimations {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}

export interface FlavorSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface FlavorBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

// Interfaz principal que debe implementar cada flavor
export interface FlavorTheme {
  id: number;
  flavor: Flavor;
  logo: FlavorLogo;
  colors: FlavorColors;
  typography: FlavorTypography;
  images: FlavorImages;
  content: FlavorContent;
  animations: FlavorAnimations;
  spacing: FlavorSpacing;
  borderRadius: FlavorBorderRadius;
}

// Tipos específicos para cada flavor (extienden la interfaz base)
export interface SportTheme extends FlavorTheme {
  flavor: Flavor.SPORT;
}

export interface LabourTheme extends FlavorTheme {
  flavor: Flavor.LABOUR;
}


// Union type para todos los temas posibles
export type AnyFlavorTheme = SportTheme | LabourTheme;
