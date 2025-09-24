import { Flavor, FlavorTheme, AnyFlavorTheme } from './model_flavor';

// Factory para crear funciones helper automáticamente
export class FlavorFactory {
  private static themes: Map<Flavor, FlavorTheme> = new Map();

  // Registrar un tema
  static registerTheme(flavor: Flavor, theme: FlavorTheme): void {
    this.themes.set(flavor, theme);
  }

  // Obtener tema por flavor
  static getTheme(flavor: Flavor): AnyFlavorTheme | null {
    return this.themes.get(flavor) || null;
  }

  // Obtener colores por flavor
  static getColors(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.colors || null;
  }

  // Obtener contenido por flavor
  static getContent(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.content || null;
  }

  // Obtener imágenes por flavor
  static getImages(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.images || null;
  }

  // Obtener logo por flavor
  static getLogo(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.logo || null;
  }

  // Obtener tipografía por flavor
  static getTypography(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.typography || null;
  }

  // Obtener animaciones por flavor
  static getAnimations(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.animations || null;
  }

  // Obtener espaciado por flavor
  static getSpacing(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.spacing || null;
  }

  // Obtener border radius por flavor
  static getBorderRadius(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    return theme?.borderRadius || null;
  }

  // Crear tema Material-UI automáticamente
  static getMuiTheme(flavor: Flavor) {
    const theme = this.getTheme(flavor);
    if (!theme) return null;

    return {
      palette: {
        primary: {
          main: theme.colors.primary,
          dark: theme.colors.button.primaryHover,
          light: theme.colors.accent,
        },
        secondary: {
          main: theme.colors.secondary,
          dark: theme.colors.button.secondaryHover,
        },
        background: {
          default: theme.colors.background,
          paper: theme.colors.surface,
        },
        text: {
          primary: theme.colors.text.primary,
          secondary: theme.colors.text.secondary,
          disabled: theme.colors.text.disabled,
        },
      },
      typography: {
        fontFamily: theme.typography.fontFamily.primary,
        h1: {
          fontFamily: theme.typography.fontFamily.secondary,
          fontWeight: theme.typography.fontWeight.bold,
        },
        h2: {
          fontFamily: theme.typography.fontFamily.secondary,
          fontWeight: theme.typography.fontWeight.bold,
        },
        button: {
          fontFamily: theme.typography.fontFamily.primary,
          fontWeight: theme.typography.fontWeight.medium,
        },
      },
      shape: {
        borderRadius: parseInt(theme.borderRadius.md),
      },
      spacing: (factor: number) => `${factor * 8}px`,
    };
  }

  // Obtener todos los flavors registrados
  static getRegisteredFlavors(): Flavor[] {
    return Array.from(this.themes.keys());
  }

  // Verificar si un flavor está registrado
  static isFlavorRegistered(flavor: Flavor): boolean {
    return this.themes.has(flavor);
  }
}

// Función helper para crear un flavor automáticamente
export function createFlavor<T extends FlavorTheme>(flavor: T): T {
  // Registrar el tema en el factory
  FlavorFactory.registerTheme(flavor.flavor, flavor);
  
  // Retornar el tema
  return flavor;
}

// Funciones helper globales que usan el factory
export const getThemeByFlavor = (flavor: Flavor) => FlavorFactory.getTheme(flavor);
export const getColorsByFlavor = (flavor: Flavor) => FlavorFactory.getColors(flavor);
export const getContentByFlavor = (flavor: Flavor) => FlavorFactory.getContent(flavor);
export const getImagesByFlavor = (flavor: Flavor) => FlavorFactory.getImages(flavor);
export const getLogoByFlavor = (flavor: Flavor) => FlavorFactory.getLogo(flavor);
export const getTypographyByFlavor = (flavor: Flavor) => FlavorFactory.getTypography(flavor);
export const getAnimationsByFlavor = (flavor: Flavor) => FlavorFactory.getAnimations(flavor);
export const getSpacingByFlavor = (flavor: Flavor) => FlavorFactory.getSpacing(flavor);
export const getBorderRadiusByFlavor = (flavor: Flavor) => FlavorFactory.getBorderRadius(flavor);
export const getMuiThemeByFlavor = (flavor: Flavor) => FlavorFactory.getMuiTheme(flavor);
