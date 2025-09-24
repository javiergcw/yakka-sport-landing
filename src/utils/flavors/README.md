# 🎨 Sistema de Flavors Centralizado

## 🎯 Cambio de Flavor Global

Para cambiar el flavor de toda la aplicación, simplemente modifica **UNA SOLA CONSTANTE**:

```typescript
// 📁 src/utils/flavors/current-flavor.ts
export const CURRENT_FLAVOR: Flavor = Flavor.SPORT; // ← CAMBIA AQUÍ
```

### Opciones disponibles:
- `Flavor.SPORT` - Tema deportivo (actual)
- `Flavor.LABOUR` - Tema industrial/laboral
- `Flavor.HOSPITALITY` - Tema de hospitalidad

## 🔄 ¿Qué se actualiza automáticamente?

Al cambiar `CURRENT_FLAVOR`, se actualiza automáticamente:

- ✅ **Colores** - Paleta de colores completa
- ✅ **Logos** - Logo principal, iconos, favicon
- ✅ **Tipografía** - Fuentes y estilos de texto
- ✅ **Imágenes** - Imágenes de fondo y galería
- ✅ **Contenido** - Textos y mensajes
- ✅ **Tema MUI** - Configuración de Material-UI

## 📁 Estructura del Sistema

```
src/utils/flavors/
├── current-flavor.ts          # 🎯 CONSTANTE CENTRALIZADA
├── settings/
│   ├── model_flavor.ts        # Interfaces y tipos
│   └── index.ts              # Funciones helper
├── companies/
│   ├── sport.ts              # Configuración SPORT
│   └── labour.ts             # Configuración LABOUR
└── global-config.ts          # Configuración global
```

## 🚀 Uso en Componentes

```typescript
import { getCurrentFlavor, getColorsByFlavor, getLogoByFlavor } from '@/utils/flavors/settings';

export default function MiComponente() {
  const selectedFlavor = getCurrentFlavor();
  const colors = getColorsByFlavor(selectedFlavor);
  const logo = getLogoByFlavor(selectedFlavor);
  
  return (
    <div style={{ color: colors?.primary }}>
      <img src={logo?.main} alt={logo?.alt} />
    </div>
  );
}
```

## 🎨 Agregar un Nuevo Flavor

1. **Crear configuración** en `companies/nuevo-flavor.ts`
2. **Agregar al enum** en `model_flavor.ts`
3. **Actualizar switch** en `settings/index.ts`
4. **Cambiar constante** en `current-flavor.ts`

## 💡 Ventajas del Sistema

- 🎯 **Un solo punto de cambio** - Modifica una constante
- 🔄 **Actualización automática** - Todo se sincroniza
- 🛡️ **Type Safety** - TypeScript garantiza consistencia
- 📦 **Modular** - Fácil agregar nuevos flavors
- 🚀 **Performance** - Sin re-renders innecesarios
