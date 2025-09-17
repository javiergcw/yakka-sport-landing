'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent
} from '@mui/material';
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface AboutUsProps {
  selectedFlavor: Flavor;
}

export default function AboutUs({ selectedFlavor }: AboutUsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getColorsByFlavor(selectedFlavor);
  const content = getContentByFlavor(selectedFlavor);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Sección About Company */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
              fontWeight: 'bold',
              letterSpacing: { xs: 1.5, sm: 2 },
              color: colors?.primary,
              mb: { xs: 1.5, sm: 2 },
              display: 'block',
            }}
          >
            ABOUT COMPANY
          </Typography>
          
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, sm: 3 },
              color: colors?.text.primary,
              lineHeight: { xs: 1.1, sm: 1.2 },
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            {content?.about.title}
          </Typography>
          
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            sx={{
              maxWidth: { xs: '100%', sm: '600px', md: '800px' },
              mx: 'auto',
              color: colors?.text.primary,
              lineHeight: { xs: 1.5, sm: 1.6 },
              opacity: 0.8,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            }}
          >
            {content?.about.description}
          </Typography>
        </Box>

        {/* Sección Our Culture */}
        <Card
          sx={{
            borderRadius: { xs: 2, sm: 3 },
            boxShadow: 'none',
            overflow: 'hidden',
            backgroundColor: "#ffffff",
            border: '1px solid #e0e0e0',
            height: { xs: 'auto', md: '400px' },
            mx: { xs: 1, sm: 0 },
          }}
        >
          <CardContent sx={{ p: 0, height: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                height: '100%',
              }}
            >
              {/* Imagen */}
              <Box
                sx={{
                  width: { xs: '100%', md: '50%' },
                  height: { xs: '250px', sm: '300px', md: '400px' },
                  backgroundImage: `url('/home/machine-2691439_1280.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: colors?.primary,
                    opacity: 0.1,
                  }
                }}
              />
              
              {/* Contenido de texto */}
              <Box
                sx={{
                  width: { xs: '100%', md: '50%' },
                  p: { xs: 3, sm: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: { xs: 'auto', md: '400px' },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
                    fontWeight: 'bold',
                    letterSpacing: { xs: 1.5, sm: 2 },
                    color: colors?.primary,
                    mb: { xs: 1.5, sm: 2 },
                    display: 'block',
                  }}
                >
                  OUR CULTURE
                </Typography>
                
                <Typography
                  variant={isMobile ? 'h6' : 'h4'}
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: { xs: 2, sm: 3 },
                    color: colors?.text.primary,
                    lineHeight: { xs: 1.1, sm: 1.2 },
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  }}
                >
                  Building Excellence Together
                </Typography>
                
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  sx={{
                    mb: { xs: 3, sm: 4 },
                    color: colors?.text.primary,
                    lineHeight: { xs: 1.5, sm: 1.6 },
                    opacity: 0.8,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                >
                  We believe in fostering a culture of collaboration, innovation, and continuous improvement. Our team is dedicated to delivering exceptional results while maintaining the highest standards of quality and safety.
                </Typography>
                
                {/* Botón CTA */}
                <Button
                  variant="outlined"
                  size={isMobile ? 'medium' : 'large'}
                  sx={{
                    alignSelf: { xs: 'center', sm: 'flex-start' },
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'medium',
                    borderColor: colors?.text.primary,
                    color: colors?.text.primary,
                    borderRadius: 2,
                    width: { xs: '100%', sm: 'auto' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors?.primary,
                      borderColor: colors?.primary,
                      color: colors?.background,
                      transform: 'translateY(-2px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
