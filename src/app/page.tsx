'use client';

import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import FormComponent from "@/components/FormComponent";
import { getThemeByFlavor, getImagesByFlavor, getMuiThemeByFlavor, getCurrentFlavor } from "@/utils/flavors/settings";
import 'swiper/css';

export default function Home() {
  const selectedFlavor = getCurrentFlavor();

  // Obtener configuración del tema usando el sistema automático
  const theme = getThemeByFlavor(selectedFlavor);
  const images = getImagesByFlavor(selectedFlavor);
  const muiTheme = createTheme(getMuiThemeByFlavor(selectedFlavor) || {});

  // Arrays de imágenes para cada columna de la galería (usando configuración del tema)
  const leftColumnImages = images?.gallery.slice(0, 5) || [];
  const rightColumnImages = images?.gallery.slice(5, 10) || [];

  // Función helper para renderizar las imágenes de una columna
  const renderImageColumn = (images: string[], animationName: string, scrollDirection: 'up' | 'down' = 'up') => {
    // Duplicamos las imágenes para el efecto de scroll infinito
    const duplicatedImages = [...images, ...images];

    // Definimos las animaciones según la dirección
    const getKeyframes = () => {
      if (scrollDirection === 'down') {
        return {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        };
      } else {
        return {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        };
      }
    };

    return (
      <Box sx={{
        height: { xs: '100%', lg: '200%' },
        width: { xs: '200%', lg: '100%' },
        display: 'flex',
        flexDirection: { xs: 'row', lg: 'column' },
        gap: 1,
        animation: `${animationName} 15s linear infinite`,
        [`@keyframes ${animationName}`]: getKeyframes(),
        [`@media (max-width: 1200px)`]: {
          [`@keyframes ${animationName}`]: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
          }
        }
      }}>
        {duplicatedImages.map((imageSrc, index) => (
          <Box key={index} sx={{
            width: { xs: '120px', lg: '80%' },
            height: { xs: '100%', lg: 'auto' },
            minHeight: { xs: '100px', lg: '250px' },
            borderRadius: 2,
            overflow: 'hidden',
            flex: { xs: '0 0 auto', lg: '0 0 auto' }
          }}>
            <img
              src={imageSrc}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        sx={{
          minHeight: { xs: '100vh', lg: '94vh' },
          maxHeight: { xs: '100vh', lg: '94vh' },
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
      <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 8 } }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 4,
          alignItems: 'center'
        }}>
          
          {/* En móvil: mostrar imágenes primero */}
          <Box sx={{
            display: { xs: 'flex', lg: 'none' },
            gap: 0.5,
            height: '150px',
            overflow: 'hidden',
            opacity: 0.4,
            width: '100%',
            mb: 2
          }}>
            <Box sx={{
              flex: 1,
              height: '100%',
              overflow: 'hidden'
            }}>
              {renderImageColumn(leftColumnImages, 'scrollUp', 'up')}
            </Box>
            <Box sx={{
              flex: 1,
              height: '100%',
              overflow: 'hidden'
            }}>
              {renderImageColumn(rightColumnImages, 'scrollDown', 'down')}
            </Box>
          </Box>

          {/* Formulario */}
          <Box sx={{
            flex: { xs: 1, lg: '0 0 50%' },
            width: '100%'
          }}>
            <FormComponent selectedFlavor={selectedFlavor} />
          </Box>

          {/* En desktop: mostrar imágenes a la derecha */}
          <Box sx={{
            flex: { xs: 1, lg: '0 0 50%' },
            display: { xs: 'none', lg: 'flex' },
            gap: 0.5,
            height: '100vh',
            overflow: 'hidden'
          }}>
            <Box sx={{
              flex: 1,
              height: '100%',
              overflow: 'hidden'
            }}>
              {renderImageColumn(leftColumnImages, 'scrollUp', 'up')}
            </Box>
            <Box sx={{
              flex: 1,
              height: '100%',
              overflow: 'hidden'
            }}>
              {renderImageColumn(rightColumnImages, 'scrollDown', 'down')}
            </Box>
          </Box>

        </Box>
      </Container>
      </Box>
    </ThemeProvider>
  );
}