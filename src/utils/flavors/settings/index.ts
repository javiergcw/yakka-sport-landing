// Archivo índice para exportar todas las configuraciones de flavors
import { Flavor } from './model_flavor';
import { sportTheme } from '../companies/sport';
import { labourTheme } from '../companies/labour';
import { createFlavor } from './flavor-factory';

// Registrar los temas en el factory automáticamente
createFlavor(sportTheme);
createFlavor(labourTheme);

// Exportar todas las funciones y tipos
export * from './model_flavor';
export * from './flavor-factory';
export * from '../companies/sport';
export * from '../companies/labour';
export * from '../global-config';
export * from '../current-flavor';
