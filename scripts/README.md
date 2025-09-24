# Sistema de Build por Flavor

Este sistema te permite compilar y ejecutar el proyecto con diferentes flavors (configuraciones) de manera independiente.

## 🎯 Flavors Disponibles

- **SPORT**: Plataforma Deportiva y Fitness
- **LABOUR**: Plataforma Industrial y Manufacturera

## 🚀 Comandos Rápidos

### Desarrollo
```bash
# Ejecutar en modo desarrollo con flavor SPORT
npm run dev:sport

# Ejecutar en modo desarrollo con flavor LABOUR
npm run dev:labour
```

### Build de Producción
```bash
# Compilar para producción con flavor SPORT
npm run build:sport

# Compilar para producción con flavor LABOUR
npm run build:labour
```

### Servidor de Producción
```bash
# Iniciar servidor con flavor SPORT
npm run start:sport

# Iniciar servidor con flavor LABOUR
npm run start:labour
```

### Cambiar Flavor Manualmente
```bash
# Cambiar a flavor SPORT
npm run flavor:sport

# Cambiar a flavor LABOUR
npm run flavor:labour
```

## 🔧 Comandos Avanzados

### Scripts Directos
```bash
# Cambiar flavor específico
node scripts/set-flavor.js sport
node scripts/set-flavor.js labour

# Build con flavor específico
node scripts/build-flavor.js sport --dev
node scripts/build-flavor.js labour --build
```

## 📁 Estructura de Archivos

```
scripts/
├── set-flavor.js          # Script para cambiar flavor
├── build-flavor.js        # Script para build con flavor
├── flavor-config.json     # Configuración de flavors
└── README.md             # Este archivo
```

## ⚙️ Configuración

El archivo `flavor-config.json` contiene la configuración de cada flavor:

- **Puerto**: Puerto específico para cada flavor
- **Directorio de Build**: Directorio separado para cada build
- **Variables de Entorno**: Variables específicas por flavor
- **Configuración de Build**: Opciones de compilación

## 🎨 Personalización

Para agregar un nuevo flavor:

1. Crea el archivo de configuración en `src/utils/flavors/companies/nuevo-flavor.ts`
2. Actualiza el enum `Flavor` en `model_flavor.ts`
3. Agrega la configuración en `flavor-config.json`
4. Actualiza los scripts en `package.json`

## 🔍 Verificación

Para verificar que el flavor está configurado correctamente:

1. Revisa el archivo `src/utils/flavors/current-flavor.ts`
2. Verifica el archivo `build-config.json` (generado automáticamente)
3. Ejecuta el proyecto y verifica que los estilos y contenido correspondan al flavor

## 🐛 Troubleshooting

### Error: "Flavor inválido"
- Verifica que el flavor esté en la lista de flavors disponibles
- Usa `sport` o `labour` (en minúsculas)

### Error: "No se pudo encontrar la línea CURRENT_FLAVOR"
- Verifica que el archivo `current-flavor.ts` existe y tiene el formato correcto
- Ejecuta `npm run flavor:sport` para resetear

### Error de Build
- Limpia la caché: `rm -rf .next`
- Verifica que todas las dependencias estén instaladas: `npm install`
- Revisa los logs de error para más detalles

## 📝 Notas Importantes

- Cada flavor tiene su propio directorio de build (`.next-sport`, `.next-labour`)
- Los puertos son diferentes para evitar conflictos (3000 para sport, 3001 para labour)
- El sistema genera automáticamente un archivo `build-config.json` con información del build
- Los cambios de flavor se aplican inmediatamente al archivo `current-flavor.ts`

## 🎉 Ejemplos de Uso

```bash
# Desarrollo completo con flavor SPORT
npm run dev:sport

# Build de producción con flavor LABOUR
npm run build:labour

# Cambiar flavor y luego ejecutar manualmente
npm run flavor:sport
npm run dev
```
