'use client';

import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { Flavor } from "@/types/flavor";
import FormComponent from "@/components/FormComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(Flavor.LABOUR);
  
  // Arreglos de imágenes para cada columna
  const leftColumnImages = [
    "/Rectangle-3580-min.png",
    "/Rectangle-3583-1-min.png",
    "/Rectangle-3580-min.png",
    "/Rectangle-3583-1-min.png",
    "/Rectangle-3580-min.png",
    "/Rectangle-3583-1-min.png"
  ];
  
  const rightColumnImages = [
    "/Rectangle-3583-1-min.png",
    "/Rectangle-3580-min.png",
    "/Rectangle-3583-1-min.png",
    "/Rectangle-3580-min.png",
    "/Rectangle-3583-1-min.png",
    "/Rectangle-3580-min.png"
  ];

    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',      
        }}
      >
        <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 8}}}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
            alignItems: 'center'
          }}>
            {/* Formulario a la izquierda */}
            <Box sx={{ 
              flex: { xs: 1, lg: '0 0 50%' },
              width: '100%'
            }}>
              <FormComponent selectedFlavor={selectedFlavor} />
            </Box>

            {/* Dos columnas - una sube, otra baja */}
            <Box sx={{ 
              flex: { xs: 1, lg: '0 0 50%' },
              display: { xs: 'none', lg: 'flex' },
              gap: 2,
              height: '100vh',
              overflow: 'hidden'
            }}>
              {/* Columna izquierda - sube */}
              <Box sx={{ 
                flex: 1,
                height: '100%',
                overflow: 'hidden'
              }}>
                <Box sx={{
                  height: '200%',
                display: 'flex',
                flexDirection: 'column',
                  gap: 2,
                animation: 'scrollUp 15s linear infinite',
                '@keyframes scrollUp': {
                  '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' }
                  }
                }}>
                  {/* Primera serie */}
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 1"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 2"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 3"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  
                  {/* Segunda serie duplicada */}
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 1"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 2"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 3"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Columna derecha - baja */}
              <Box sx={{ 
                flex: 1,
                height: '100%',
                overflow: 'hidden'
              }}>
                <Box sx={{
                  height: '200%',
                display: 'flex',
                flexDirection: 'column',
                  gap: 2,
                animation: 'scrollDown 15s linear infinite',
                '@keyframes scrollDown': {
                    '0%': { transform: 'translateY(-50%)' },
                  '100%': { transform: 'translateY(0)' }
                }
              }}>
                  {/* Primera serie */}
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 1"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 2"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 3"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  
                  {/* Segunda serie duplicada */}
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 1"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3580-min.png" 
                      alt="Slide 2"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                  <Box sx={{ 
                    aspectRatio: '1',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}>
                    <img 
                      src="/Rectangle-3583-1-min.png" 
                      alt="Slide 3"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>
        </Container>

     </Box>
    );
}