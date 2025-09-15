'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
  keyframes
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  Home as HomeIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Animaciones personalizadas
const moveUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const moveDown = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
`;

const AnimatedAvatar = styled(Avatar)`
  animation: ${moveUp} 3s ease-in-out infinite;
  
  &:nth-of-type(even) {
    animation: ${moveDown} 3s ease-in-out infinite;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(45deg, #1976d2, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Imágenes de perfil simuladas
  const profileImages = [
    { src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', alt: 'Mujer sonriente' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', alt: 'Hombre con gafas' },
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', alt: 'Hombre con barba' },
    { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', alt: 'Mujer con hoja' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', alt: 'Mujer con moño' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', alt: 'Hombre sonriente' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'text.primary' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: 40,
              height: 40,
              bgcolor: '#1976d2',
              borderRadius: 1
            }}>
              <HomeIcon sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              felan
            </Typography>
          </Box>

          {/* Navegación */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {['Demos', 'Cats', 'Users', 'Pages', 'Listings'].map((item) => (
              <Box key={item} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {item}
                </Typography>
                <ExpandMoreIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              </Box>
            ))}
          </Box>

          {/* Lado derecho */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
              <SearchIcon sx={{ color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Search
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                Freelancers
              </Typography>
              <ExpandMoreIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            </Box>
            <Button variant="text" sx={{ color: 'text.primary' }}>
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'center'
        }}>
          {/* Columna izquierda - Texto y búsqueda */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h2" sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 2
              }}>
                Find the right
              </Typography>
              <GradientText variant="h2" sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 'bold',
                mb: 2
              }}>
                Freelance
              </GradientText>
              <Typography variant="h2" sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 'bold',
                color: 'text.primary'
              }}>
                service
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ 
              color: 'text.secondary', 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}>
              Over 3000+ expect freelancers are waiting for you
            </Typography>

            {/* Barra de búsqueda */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 6,
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <TextField
                placeholder="Service title..."
                variant="outlined"
                sx={{ 
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    height: 56
                  }
                }}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                }}
              />
              <TextField
                select
                value="All Categories"
                variant="outlined"
                sx={{ 
                  minWidth: 150,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    height: 56
                  }
                }}
                InputProps={{
                  endAdornment: <ExpandMoreIcon sx={{ color: 'text.secondary' }} />
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#1976d2',
                  borderRadius: 3,
                  px: 4,
                  height: 56,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: '#1565c0'
                  }
                }}
              >
                Search
              </Button>
            </Box>

            {/* Estadísticas */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  color: 'text.primary',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  50K
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Expert Freelancers
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  color: 'text.primary',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  45K
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Projects Completed
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Columna derecha - Imágenes */}
          <Box sx={{ 
            flex: 1,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400
          }}>
            {/* Estrella decorativa */}
            <StarIcon sx={{ 
              position: 'absolute',
              top: 20,
              left: 20,
              color: '#1976d2',
              fontSize: 24,
              zIndex: 2
            }} />

            {/* Grid de imágenes */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
              position: 'relative'
            }}>
              {profileImages.map((profile, index) => (
                <AnimatedAvatar
                  key={index}
                  src={profile.src}
                  alt={profile.alt}
                  sx={{
                    width: { xs: 80, md: 100, lg: 120 },
                    height: { xs: 80, md: 100, lg: 120 },
                    border: '3px solid white',
                    boxShadow: 3,
                    animationDelay: `${index * 0.5}s`,
                    ...(index === 3 && { borderRadius: 2 }), // Imagen con hoja - redondeada
                    ...(index === 5 && { borderRadius: 2 })  // Imagen de planta - redondeada
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
