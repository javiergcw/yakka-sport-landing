// Archivo índice para exportar todas las configuraciones de flavors
import { Flavor } from './model_flavor';
import { sportTheme } from '../companies/sport';
import { AnyFlavorTheme } from './model_flavor';

// Función para obtener el tema basado en el flavor seleccionado
export const getThemeByFlavor = (flavor: Flavor): AnyFlavorTheme | null => {
  switch (flavor) {
    case Flavor.SPORT:
      return sportTheme;
    case Flavor.LABOUR:
      // TODO: Implementar tema para LABOUR
      return null;
    case Flavor.HOSPITALITY:
      // TODO: Implementar tema para HOSPITALITY
      return null;
    default:
      return null;
  }
};

// Funciones helper
export const getColorsByFlavor = (flavor: Flavor) => {
  const theme = getThemeByFlavor(flavor);
  return theme?.colors || null;
};

export const getContentByFlavor = (flavor: Flavor) => {
  const theme = getThemeByFlavor(flavor);
  return theme?.content || null;
};

export const getImagesByFlavor = (flavor: Flavor) => {
  const theme = getThemeByFlavor(flavor);
  return theme?.images || null;
};

export const getLogoByFlavor = (flavor: Flavor) => {
  const theme = getThemeByFlavor(flavor);
  return theme?.logo || null;
};

export const getMuiThemeByFlavor = (flavor: Flavor) => {
  const theme = getThemeByFlavor(flavor);
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
};

// Exportar todas las funciones y tipos
export * from './model_flavor';
export * from '../companies/sport';
export * from '../global-config';
export * from '../current-flavor';
