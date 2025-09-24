#!/usr/bin/env node

/**
 * Script para cambiar el flavor del proyecto
 * Uso: node scripts/set-flavor.js <flavor>
 * Ejemplo: node scripts/set-flavor.js sport
 */

const fs = require('fs');
const path = require('path');

// Flavors disponibles
const FLAVORS = {
  sport: 'SPORT',
  labour: 'LABOUR'
};

// Función para validar el flavor
function validateFlavor(flavor) {
  const normalizedFlavor = flavor.toLowerCase();
  if (!FLAVORS[normalizedFlavor]) {
    console.error(`❌ Flavor inválido: ${flavor}`);
    console.log(`Flavors disponibles: ${Object.keys(FLAVORS).join(', ')}`);
    process.exit(1);
  }
  return FLAVORS[normalizedFlavor];
}

// Función para actualizar el archivo current-flavor.ts
function updateCurrentFlavor(flavor) {
  const filePath = path.join(__dirname, '..', 'src', 'utils', 'flavors', 'current-flavor.ts');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reemplazar la línea que define CURRENT_FLAVOR
    const flavorRegex = /export const CURRENT_FLAVOR: Flavor = Flavor\.\w+;/;
    const newFlavorLine = `export const CURRENT_FLAVOR: Flavor = Flavor.${flavor};`;
    
    if (flavorRegex.test(content)) {
      content = content.replace(flavorRegex, newFlavorLine);
    } else {
      console.error('❌ No se pudo encontrar la línea CURRENT_FLAVOR en el archivo');
      process.exit(1);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Flavor cambiado a: ${flavor}`);
    
  } catch (error) {
    console.error(`❌ Error al actualizar el flavor: ${error.message}`);
    process.exit(1);
  }
}

// Función para crear archivo de configuración de build
function createBuildConfig(flavor) {
  const configPath = path.join(__dirname, '..', 'build-config.json');
  const config = {
    flavor: flavor,
    timestamp: new Date().toISOString(),
    buildId: `build-${flavor.toLowerCase()}-${Date.now()}`
  };
  
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
    console.log(`✅ Configuración de build creada: ${flavor}`);
  } catch (error) {
    console.error(`❌ Error al crear configuración de build: ${error.message}`);
    process.exit(1);
  }
}

// Función principal
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('📋 Uso: node scripts/set-flavor.js <flavor>');
    console.log(`Flavors disponibles: ${Object.keys(FLAVORS).join(', ')}`);
    process.exit(1);
  }
  
  const flavor = validateFlavor(args[0]);
  
  console.log(`🔄 Cambiando flavor a: ${flavor}`);
  
  updateCurrentFlavor(flavor);
  createBuildConfig(flavor);
  
  console.log(`🎉 Flavor configurado exitosamente: ${flavor}`);
  console.log('💡 Ahora puedes ejecutar: npm run build o npm run dev');
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { validateFlavor, updateCurrentFlavor, createBuildConfig };
