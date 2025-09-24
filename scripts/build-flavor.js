#!/usr/bin/env node

/**
 * Script para compilar el proyecto con un flavor específico
 * Uso: node scripts/build-flavor.js <flavor> [--dev|--build|--start]
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

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

// Función para cambiar el flavor
function setFlavor(flavor) {
  const { updateCurrentFlavor, createBuildConfig } = require('./set-flavor');
  
  console.log(`🔄 Configurando flavor: ${flavor}`);
  updateCurrentFlavor(flavor);
  createBuildConfig(flavor);
}

// Función para ejecutar comando
function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    console.log(`🚀 Ejecutando: ${command} ${args.join(' ')}`);
    
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: path.join(__dirname, '..')
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Comando falló con código: ${code}`));
      }
    });
    
    child.on('error', (error) => {
      reject(error);
    });
  });
}

// Función para mostrar información del build
function showBuildInfo(flavor, mode) {
  const configPath = path.join(__dirname, '..', 'build-config.json');
  
  console.log('\n📋 Información del Build:');
  console.log(`   Flavor: ${flavor}`);
  console.log(`   Modo: ${mode}`);
  
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      console.log(`   Build ID: ${config.buildId}`);
      console.log(`   Timestamp: ${config.timestamp}`);
    } catch (error) {
      console.log('   Configuración no disponible');
    }
  }
  
  console.log('\n🎯 Comandos disponibles:');
  console.log('   npm run dev:sport     - Desarrollo con flavor SPORT');
  console.log('   npm run dev:labour    - Desarrollo con flavor LABOUR');
  console.log('   npm run build:sport   - Build de producción con flavor SPORT');
  console.log('   npm run build:labour  - Build de producción con flavor LABOUR');
  console.log('   npm run start:sport   - Iniciar servidor con flavor SPORT');
  console.log('   npm run start:labour  - Iniciar servidor con flavor LABOUR');
  console.log('');
}

// Función principal
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('📋 Uso: node scripts/build-flavor.js <flavor> [--dev|--build|--start]');
    console.log(`Flavors disponibles: ${Object.keys(FLAVORS).join(', ')}`);
    console.log('Modos disponibles: --dev, --build, --start');
    process.exit(1);
  }
  
  const flavor = validateFlavor(args[0]);
  const mode = args[1] || '--dev';
  
  try {
    // Configurar el flavor
    setFlavor(flavor);
    
    // Mostrar información
    showBuildInfo(flavor, mode);
    
    // Ejecutar comando según el modo
    switch (mode) {
      case '--dev':
        await runCommand('npm', ['run', 'dev']);
        break;
      case '--build':
        await runCommand('npm', ['run', 'build']);
        break;
      case '--start':
        await runCommand('npm', ['run', 'start']);
        break;
      default:
        console.error(`❌ Modo inválido: ${mode}`);
        console.log('Modos disponibles: --dev, --build, --start');
        process.exit(1);
    }
    
    console.log(`✅ Comando ejecutado exitosamente con flavor: ${flavor}`);
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { validateFlavor, setFlavor, runCommand };
