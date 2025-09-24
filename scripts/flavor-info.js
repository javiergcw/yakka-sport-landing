#!/usr/bin/env node

/**
 * Script para mostrar información del flavor actual
 * Uso: node scripts/flavor-info.js
 */

const fs = require('fs');
const path = require('path');

// Función para leer el flavor actual
function getCurrentFlavor() {
  const filePath = path.join(__dirname, '..', 'src', 'utils', 'flavors', 'current-flavor.ts');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/export const CURRENT_FLAVOR: Flavor = Flavor\.(\w+);/);
    return match ? match[1] : 'UNKNOWN';
  } catch (error) {
    return 'ERROR';
  }
}

// Función para leer configuración de build
function getBuildConfig() {
  const configPath = path.join(__dirname, '..', 'build-config.json');
  
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return null;
  } catch (error) {
    return null;
  }
}

// Función para mostrar información del flavor
function showFlavorInfo() {
  const currentFlavor = getCurrentFlavor();
  const buildConfig = getBuildConfig();
  
  console.log('\n🎯 Información del Flavor Actual');
  console.log('================================');
  console.log(`   Flavor: ${currentFlavor}`);
  
  if (buildConfig) {
    console.log(`   Build ID: ${buildConfig.buildId}`);
    console.log(`   Timestamp: ${buildConfig.timestamp}`);
  } else {
    console.log('   Configuración de build: No disponible');
  }
  
  console.log('\n📋 Comandos Disponibles');
  console.log('=======================');
  console.log('   npm run dev:sport     - Desarrollo con flavor SPORT');
  console.log('   npm run dev:labour    - Desarrollo con flavor LABOUR');
  console.log('   npm run build:sport   - Build de producción con flavor SPORT');
  console.log('   npm run build:labour  - Build de producción con flavor LABOUR');
  console.log('   npm run start:sport   - Iniciar servidor con flavor SPORT');
  console.log('   npm run start:labour  - Iniciar servidor con flavor LABOUR');
  console.log('   npm run flavor:sport  - Cambiar a flavor SPORT');
  console.log('   npm run flavor:labour - Cambiar a flavor LABOUR');
  
  console.log('\n🔧 Comandos Avanzados');
  console.log('====================');
  console.log('   node scripts/set-flavor.js <flavor>  - Cambiar flavor');
  console.log('   node scripts/build-flavor.js <flavor> [--dev|--build|--start]');
  console.log('   node scripts/flavor-info.js          - Mostrar esta información');
  
  console.log('\n📁 Archivos de Configuración');
  console.log('============================');
  console.log('   src/utils/flavors/current-flavor.ts  - Flavor actual');
  console.log('   build-config.json                   - Configuración de build');
  console.log('   scripts/flavor-config.json          - Configuración de flavors');
  
  console.log('\n🎨 Flavors Disponibles');
  console.log('======================');
  console.log('   SPORT  - Plataforma Deportiva y Fitness');
  console.log('   LABOUR - Plataforma Industrial y Manufacturera');
  
  console.log('');
}

// Función principal
function main() {
  showFlavorInfo();
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { getCurrentFlavor, getBuildConfig, showFlavorInfo };
