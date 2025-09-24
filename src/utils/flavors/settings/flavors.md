# Sistema de Flavors - Documentación

## 📋 Descripción General

El sistema de flavors permite cambiar dinámicamente la apariencia, contenido y comportamiento de la aplicación basándose en el tipo de industria o sector seleccionado. Cada flavor tiene su propia configuración de colores, tipografía, imágenes, contenido y estilos.

## 🏗️ Estructura del Sistema

### Archivos Principales

```
src/utils/flavors/
├── model_flavor.ts         # Interfaces genéricas para todos los flavors
├── flavor-factory.ts       # Factory automático para funciones helper
├── index.ts                # Archivo índice con exportaciones
├── sport.ts                # Configuración del flavor SPORT
├── labour.ts               # Configuración del flavor LABOUR
└── flavors.md              # Esta documentación
```

### Tipos de Flavor Disponibles

```typescript
export enum Flavor {
  SPORT = 'sport',
  LABOUR = 'labour',
  HOSPITALITY = 'hospitality'
}
```

## 🎨 Estructura de un Flavor

### Modelo Base (`model_flavor.ts`)

Todas las interfaces genéricas están definidas en `model_flavor.ts` para mantener consistencia y reutilización:

```typescript
// Interfaz principal que debe implementar cada flavor
export interface FlavorTheme {
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

// Tipos específicos para cada flavor
export interface SportTheme extends FlavorTheme {
  flavor: Flavor.SPORT;
}

export interface LabourTheme extends FlavorTheme {
  flavor: Flavor.LABOUR;
}

export interface HospitalityTheme extends FlavorTheme {
  flavor: Flavor.HOSPITALITY;
}

// Union type para todos los temas posibles
export type AnyFlavorTheme = SportTheme | LabourTheme | HospitalityTheme;
```

### Componentes de un Flavor

#### 1. **Logo** (`FlavorLogo`)
```typescript
export interface FlavorLogo {
  main: string;        // Logo principal
  icon: string;        // Icono pequeño
  favicon: string;     // Favicon
  alt: string;         // Texto alternativo
}
```

#### 2. **Colores** (`FlavorColors`)
```typescript
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
```

#### 3. **Tipografía** (`FlavorTypography`)
```typescript
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
```

#### 4. **Imágenes** (`FlavorImages`)
```typescript
export interface FlavorImages {
  hero: string;            // Imagen del hero
  gallery: string[];       // Array de imágenes para galería
  background: string;      // Imagen de fondo
  icons: {
    [key: string]: string; // Iconos específicos del flavor
  };
}
```

#### 5. **Contenido** (`FlavorContent`)
```typescript
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
```

#### 6. **Animaciones** (`FlavorAnimations`)
```typescript
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
```

#### 7. **Espaciado** (`FlavorSpacing`)
```typescript
export interface FlavorSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
```

#### 8. **Border Radius** (`FlavorBorderRadius`)
```typescript
export interface FlavorBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
```

## 🚀 Cómo Crear un Nuevo Flavor

### Paso 1: Crear el archivo del flavor

Crea un nuevo archivo en `src/utils/flavors/` con el nombre del flavor, por ejemplo `labour.ts`:

```typescript
import { Flavor } from '@/types/flavor';
import { LabourTheme } from './model_flavor';
import { createFlavor } from './flavor-factory';

// Definir la configuración específica del flavor
export const labourTheme = createFlavor<LabourTheme>({
  flavor: Flavor.LABOUR,
  
  logo: {
    main: '/logo-labour.svg',
    icon: '/icon-labour.svg',
    favicon: '/favicon-labour.ico',
    alt: 'Yakka Labour - Plataforma Industrial'
  },

  colors: {
    primary: '#2E7D32',      // Verde industrial
    secondary: '#1976D2',    // Azul técnico
    accent: '#FFC107',       // Amarillo de seguridad
    background: '#FAFAFA',   // Gris claro
    surface: '#FFFFFF',      // Blanco
    text: {
      primary: '#212121',    // Negro industrial
      secondary: '#757575',  // Gris medio
      disabled: '#BDBDBD'    // Gris claro
    },
    button: {
      primary: '#2E7D32',
      primaryHover: '#1B5E20',
      secondary: '#1976D2',
      secondaryHover: '#1565C0'
    },
    border: '#E0E0E0',
    shadow: 'rgba(0, 0, 0, 0.12)',
    gradient: {
      primary: 'linear-gradient(135deg, #2E7D32 0%, #1976D2 100%)',
      secondary: 'linear-gradient(135deg, #1976D2 0%, #FFC107 100%)'
    }
  },

  typography: {
    fontFamily: {
      primary: '"Roboto", "Helvetica", "Arial", sans-serif',
      secondary: '"Roboto Condensed", sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    }
  },

  images: {
    hero: '/images/labour/hero-industrial.jpg',
    gallery: [
      '/images/labour/industrial-1.jpg',
      '/images/labour/industrial-2.jpg',
      '/images/labour/industrial-3.jpg',
      // ... más imágenes
    ],
    background: '/images/labour/background-pattern.svg',
    icons: {
      welding: '/icons/welding.svg',
      machinery: '/icons/machinery.svg',
      safety: '/icons/safety.svg',
      quality: '/icons/quality.svg'
    }
  },

  content: {
    hero: {
      title: 'Potencia tu Industria con Tecnología Avanzada',
      subtitle: 'Plataforma Industrial y Manufacturera',
      description: 'Conectamos empresas industriales con profesionales especializados en manufactura, soldadura, maquinaria y control de calidad.',
      ctaText: 'Comenzar Proyecto'
    },
    about: {
      title: 'Soluciones Industriales Integrales',
      description: 'Ofrecemos las herramientas y la red de contactos necesarias para que las empresas industriales puedan optimizar sus procesos y crecer de manera sostenible.',
      features: [
        'Conexión con profesionales certificados',
        'Herramientas de gestión de proyectos',
        'Sistema de control de calidad',
        'Pagos seguros y trazables',
        'Soporte técnico especializado'
      ]
    },
    services: {
      title: 'Nuestros Servicios Industriales',
      items: [
        {
          title: 'Soldadura Especializada',
          description: 'Servicios de soldadura TIG, MIG y arco eléctrico para proyectos industriales.',
          icon: '/icons/welding.svg'
        },
        {
          title: 'Maquinaria Industrial',
          description: 'Mantenimiento y reparación de equipos industriales y maquinaria pesada.',
          icon: '/icons/machinery.svg'
        },
        {
          title: 'Control de Calidad',
          description: 'Inspección y certificación de procesos y productos industriales.',
          icon: '/icons/quality.svg'
        },
        {
          title: 'Seguridad Industrial',
          description: 'Consultoría en seguridad laboral y prevención de riesgos.',
          icon: '/icons/safety.svg'
        }
      ]
    },
    testimonials: [
      {
        name: 'Juan Pérez',
        role: 'Gerente de Producción',
        content: 'Esta plataforma nos ha permitido encontrar profesionales altamente calificados para nuestros proyectos industriales.',
        avatar: '/images/testimonials/juan.jpg'
      },
      {
        name: 'María Rodríguez',
        role: 'Ingeniera de Calidad',
        content: 'Las herramientas de gestión son excelentes. Podemos controlar todo el proceso desde un solo lugar.',
        avatar: '/images/testimonials/maria.jpg'
      }
    ],
    contact: {
      title: '¿Listo para Optimizar tu Industria?',
      description: 'Únete a nuestra red de empresas industriales y profesionales especializados.',
      email: 'hola@yakk labour.com',
      phone: '+1 (555) 234-5678',
      address: '456 Industrial Boulevard, Manufacturing Zone, Chicago, USA'
    }
  },

  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  }
});
```

### Paso 2: Actualizar el archivo índice

Actualiza `src/utils/flavors/index.ts` para incluir el nuevo flavor:

```typescript
// Archivo índice para exportar todas las configuraciones de flavors
import './sport'; // Importar para registrar el tema SPORT
import './labour'; // Importar para registrar el tema LABOUR

// Exportar todas las funciones y tipos
export * from './model_flavor';
export * from './flavor-factory';
export * from './sport';
export * from './labour';
```

### Paso 3: Usar el nuevo flavor en tu aplicación

```typescript
import { getThemeByFlavor, getColorsByFlavor, getContentByFlavor } from '@/utils/flavors';

// En tu componente
const theme = getThemeByFlavor(Flavor.LABOUR);
const colors = getColorsByFlavor(Flavor.LABOUR);
const content = getContentByFlavor(Flavor.LABOUR);

// Usar en tu JSX
<Box sx={{ backgroundColor: colors?.primary }}>
  <Typography variant="h1">{content?.hero.title}</Typography>
</Box>
```

## 🔧 Funciones Helper Disponibles

### Funciones Generales (Automáticas)
- `getThemeByFlavor(flavor: Flavor)` - Obtiene el tema completo
- `getColorsByFlavor(flavor: Flavor)` - Obtiene solo los colores
- `getContentByFlavor(flavor: Flavor)` - Obtiene solo el contenido
- `getImagesByFlavor(flavor: Flavor)` - Obtiene solo las imágenes
- `getLogoByFlavor(flavor: Flavor)` - Obtiene solo el logo
- `getTypographyByFlavor(flavor: Flavor)` - Obtiene la tipografía
- `getAnimationsByFlavor(flavor: Flavor)` - Obtiene las animaciones
- `getSpacingByFlavor(flavor: Flavor)` - Obtiene el espaciado
- `getBorderRadiusByFlavor(flavor: Flavor)` - Obtiene el border radius
- `getMuiThemeByFlavor(flavor: Flavor)` - Obtiene el tema Material-UI

### Factory Class (Para uso avanzado)
- `FlavorFactory.getTheme(flavor)` - Obtiene tema directamente
- `FlavorFactory.getColors(flavor)` - Obtiene colores directamente
- `FlavorFactory.getRegisteredFlavors()` - Lista todos los flavors registrados
- `FlavorFactory.isFlavorRegistered(flavor)` - Verifica si un flavor está registrado

## 📝 Mejores Prácticas

### 1. **Nomenclatura Consistente**
- Usa nombres descriptivos para las funciones
- Mantén la estructura de carpetas organizada
- Usa el mismo patrón de nombres para todos los flavors

### 2. **Colores**
- Usa colores que representen la industria
- Mantén contraste suficiente para accesibilidad
- Incluye estados hover y disabled

### 3. **Contenido**
- Adapta el contenido al público objetivo
- Usa terminología específica de la industria
- Incluye ejemplos relevantes

### 4. **Imágenes**
- Usa imágenes de alta calidad
- Mantén consistencia visual
- Optimiza para web (WebP, SVG cuando sea posible)

### 5. **Tipografía**
- Elige fuentes que reflejen la personalidad de la industria
- Mantén legibilidad en todos los tamaños
- Usa jerarquía tipográfica clara

## 🚨 Consideraciones Importantes

1. **Compatibilidad con Material-UI**: Cada flavor debe incluir una función `getMuiTheme()` para integración completa
2. **Responsive Design**: Los colores y espaciados deben funcionar en todos los dispositivos
3. **Accesibilidad**: Mantén contraste suficiente y usa colores accesibles
4. **Performance**: Las imágenes deben estar optimizadas
5. **Mantenimiento**: Documenta cualquier cambio en la configuración

## 🔄 Flujo de Trabajo para Nuevos Flavors

1. **Análisis**: Identifica las necesidades específicas del nuevo flavor
2. **Diseño**: Define la paleta de colores y tipografía
3. **Contenido**: Crea textos específicos para la industria
4. **Imágenes**: Recopila o crea imágenes relevantes
5. **Implementación**: Crea el archivo del flavor siguiendo la estructura
6. **Integración**: Actualiza el archivo índice
7. **Pruebas**: Verifica que todo funcione correctamente
8. **Documentación**: Actualiza esta documentación si es necesario

## 📚 Ejemplos de Uso

### Uso Básico
```typescript
import { getThemeByFlavor } from '@/utils/flavors';

const MyComponent = ({ flavor }: { flavor: Flavor }) => {
  const theme = getThemeByFlavor(flavor);
  
  if (!theme) return <div>Tema no encontrado</div>;
  
  return (
    <Box sx={{ backgroundColor: theme.colors.primary }}>
      <Typography variant="h1">{theme.content.hero.title}</Typography>
    </Box>
  );
};
```

### Uso con Material-UI
```typescript
import { ThemeProvider, createTheme } from '@mui/material';
import { getSportMuiTheme } from '@/utils/flavors/sport';

const App = () => {
  const muiTheme = createTheme(getSportMuiTheme());
  
  return (
    <ThemeProvider theme={muiTheme}>
      {/* Tu aplicación aquí */}
    </ThemeProvider>
  );
};
```

### Uso Condicional
```typescript
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors';

const DynamicComponent = ({ flavor }: { flavor: Flavor }) => {
  const colors = getColorsByFlavor(flavor);
  const content = getContentByFlavor(flavor);
  
  return (
    <Box sx={{ 
      backgroundColor: colors?.primary,
      color: colors?.text.primary 
    }}>
      <Typography variant="h2">{content?.hero.title}</Typography>
      <Typography variant="body1">{content?.hero.description}</Typography>
    </Box>
  );
};
```

## 🏗️ Arquitectura del Sistema

### Ventajas de la Nueva Estructura

1. **Separación de Responsabilidades**: Las interfaces están separadas de las implementaciones
2. **Reutilización**: Las interfaces genéricas pueden ser usadas por todos los flavors
3. **Type Safety**: TypeScript garantiza que cada flavor implemente todas las propiedades requeridas
4. **Mantenibilidad**: Cambios en las interfaces se propagan automáticamente a todos los flavors
5. **Escalabilidad**: Fácil agregar nuevos flavors siguiendo el mismo patrón
6. **🆕 Automatización**: No necesitas escribir funciones helper repetitivas
7. **🆕 Factory Pattern**: Sistema centralizado para gestionar todos los flavors
8. **🆕 Registro Automático**: Los flavors se registran automáticamente al importarlos

### Estructura de Archivos

```
src/utils/flavors/
├── model_flavor.ts         # 🏗️ Interfaces base y tipos genéricos
├── flavor-factory.ts       # 🏭 Factory automático para funciones helper
├── index.ts                # 📦 Exportaciones y registro automático
├── sport.ts                # ⚽ Implementación del flavor SPORT
├── labour.ts               # 🔧 Implementación del flavor LABOUR
├── hospitality.ts          # 🍽️ Implementación del flavor HOSPITALITY (futuro)
└── flavors.md              # 📚 Documentación del sistema
```

### Flujo de Trabajo Simplificado

1. **Crear archivo del flavor**: Solo necesitas definir la configuración
2. **Usar `createFlavor()`**: Registra automáticamente el tema en el factory
3. **Importar en index.ts**: Para que esté disponible globalmente
4. **Usar funciones automáticas**: Todas las funciones helper están disponibles automáticamente

---

**Nota**: Esta documentación debe actualizarse cada vez que se agregue un nuevo flavor o se modifique la estructura existente. La nueva arquitectura con `model_flavor.ts` facilita el mantenimiento y la consistencia del sistema.