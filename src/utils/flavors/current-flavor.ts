import { Flavor } from './settings/model_flavor';

// 🎯 CONSTANTE CENTRALIZADA - CAMBIA AQUÍ PARA MODIFICAR TODO EL SITIO
export const CURRENT_FLAVOR: Flavor = Flavor.SPORT;

// Función para obtener el flavor actual
export const getCurrentFlavor = (): Flavor => {
  return CURRENT_FLAVOR;
};

// Función para verificar si un flavor específico está activo
export const isFlavorActive = (flavor: Flavor): boolean => {
  return CURRENT_FLAVOR === flavor;
};

// Función para obtener el nombre del flavor actual
export const getCurrentFlavorName = (): string => {
  return CURRENT_FLAVOR.toUpperCase();
};
