'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface BannerProps {
  selectedFlavor: Flavor;
}

export default function Banner({ selectedFlavor }: BannerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getColorsByFlavor(selectedFlavor);
  const content = getContentByFlavor(selectedFlavor);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('/home/welding-6252829_1280.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        mt: { xs: 6, sm: 8, md: 10 },
        px: { xs: 1, sm: 2 },
      }}
    >
      {/* Overlay sutil para legibilidad del texto */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
      
      {/* Contenido del banner */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 10,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: { xs: '100%', sm: '90%', md: '80%' },
            mx: 'auto',
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h1"
            sx={{
              fontWeight: 'medium',
              mb: { xs: 1, sm: 2 },
              color: 'white',
              lineHeight: { xs: 1.1, sm: 1.2 },
              fontSize: { 
                xs: '1.5rem', 
                sm: '2rem', 
                md: '2.5rem', 
                lg: '3rem' 
              },
            }}
          >
            {content?.hero.title}
          </Typography>
          
          <Typography
            variant={isMobile ? 'h6' : 'h4'}
            component="h2"
            sx={{
              fontWeight: 'normal',
              color: 'white',
              fontSize: { 
                xs: '1rem', 
                sm: '1.25rem', 
                md: '1.5rem', 
                lg: '1.75rem' 
              },
              lineHeight: { xs: 1.2, sm: 1.3 },
            }}
          >
            {content?.hero.subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
