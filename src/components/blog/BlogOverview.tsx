'use client';

import { Box, Container, Typography, Grid } from "@mui/material";
import { getColorsByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readMoreLink: string;
}

interface Category {
  name: string;
}

interface LatestPost {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

interface BlogOverviewProps {
  selectedFlavor: Flavor;
}

export default function BlogOverview({ selectedFlavor }: BlogOverviewProps) {
  const flavorColors = getColorsByFlavor(selectedFlavor);
  
  // Datos de ejemplo para los posts del blog
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Hospitality jobs',
      excerpt: "Launching soon Australia's #1 Sport Jobs App Stay tuned - we'll drop your exclusive invite link soon to download the..",
      category: 'UNCATEGORIZED',
      date: 'AUGUST 31, 2025',
      image: '/home/machine-2691439_1280.jpg',
      readMoreLink: '#'
    },
    {
      id: '2',
      title: '20 Companies with Location-Agnostic Pay in 2024',
      excerpt: "Here's a running list of every company (and the remote jobs they offer) that has announced that where you work...",
      category: 'SPEAKING',
      date: 'JULY 10, 2024',
      image: '/home/welding-6252829_1280.jpg',
      readMoreLink: '#'
    },
    {
      id: '3',
      title: '13 Graphic Design Interview Questions',
      excerpt: "Prepare for your next graphic design interview with these essential questions and expert tips...",
      category: 'EDUCATION',
      date: 'JUNE 5, 2024',
      image: '/home/macon-4005192_1280.jpg',
      readMoreLink: '#'
    }
  ];

  // Categorías del blog
  const categories: Category[] = [
    { name: 'Education' },
    { name: 'Interview' },
    { name: 'Learn' },
    { name: 'Skill' },
    { name: 'Speaking' },
    { name: 'Uncategorized' }
  ];

  // Posts más recientes
  const latestPosts: LatestPost[] = [
    {
      id: '1',
      title: 'Hospitality jobs',
      date: 'JUNE 5, 2024',
      thumbnail: '/home/machine-2691439_1280.jpg'
    },
    {
      id: '2',
      title: '20 Companies with Location-Agnostic Pay in 2024',
      date: 'JUNE 5, 2024',
      thumbnail: '/home/welding-6252829_1280.jpg'
    },
    {
      id: '3',
      title: '13 Graphic Design Interview Questions',
      date: 'JUNE 5, 2024',
      thumbnail: '/home/macon-4005192_1280.jpg'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        py: 8,
        px: { xs: 0, md: 4 },
        mt: {md:12, xs:4},
      }}
    >
      <Container maxWidth="xl">
        {/* Título principal */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#000000',
            mb: 2,
            fontSize: '2.5rem',
            textAlign: 'left'
          }}
        >
          Our Blog
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 6 }
        }}>
          {/* En móvil: Categorías arriba */}
          <Box sx={{ 
            display: { xs: 'block', lg: 'none' },
            mb: 2
          }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: '#000000',
                mb: 2,
                fontSize: '1.1rem'
              }}
            >
              Category
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 1
            }}>
              {categories.map((category) => (
                <Typography
                  key={category.name}
                  variant="body2"
                  sx={{
                    color: '#000000',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '4px',
                    border: '1px solid #e0e0e0',
                    '&:hover': {
                      color: flavorColors?.primary,
                      backgroundColor: flavorColors?.primary + '20'
                    }
                  }}
                >
                  {category.name}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Columna izquierda - Posts del blog */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {blogPosts.map((post) => (
                <Box
                  key={post.id}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, md: 3 },
                    alignItems: { xs: 'stretch', md: 'flex-start' },
                    height: { xs: 'auto', md: '200px' }
                  }}
                >
                  {/* Imagen del post */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '300px' },
                      height: { xs: '200px', md: '200px' },
                      flexShrink: 0,
                      borderRadius: 1,
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>

                  {/* Contenido del post */}
                  <Box sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: { xs: 'auto', md: '100%' }, 
                    overflow: 'hidden' 
                  }}>
                    <Box sx={{ overflow: 'hidden' }}>
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: flavorColors?.primary,
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            mb: 0.5
                          }}
                        >
                          {post.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666666',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {post.date}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 'bold',
                          color: '#000000',
                          mb: 1,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                          lineHeight: 1.3,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: { xs: 3, md: 2 },
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.6,
                          fontSize: '0.9rem',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: { xs: 4, md: 2 },
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                    </Box>

                    <Typography
                      component="a"
                      href={`/blog/${post.id}`}
                      sx={{
                        color: flavorColors?.primary,
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        alignSelf: 'flex-start',
                        mt: { xs: 1, md: 2 },
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Read More
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Columna derecha - Sidebar */}
          <Box sx={{ 
            width: { xs: '100%', lg: '300px' }, 
            flexShrink: 0 
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {/* Sección de Categorías - Solo en desktop */}
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#000000',
                    mb: 3,
                    fontSize: '1.1rem'
                  }}
                >
                  Category
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 1
                }}>
                  {categories.map((category) => (
                    <Typography
                      key={category.name}
                      variant="body2"
                      sx={{
                        color: '#000000',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        '&:hover': {
                          color: flavorColors?.primary
                        }
                      }}
                    >
                      {category.name}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Sección de Posts Recientes */}
              <Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#000000',
                    mb: 3,
                    fontSize: '1.1rem'
                  }}
                >
                  Latest Post
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {latestPosts.map((post) => (
                    <Box
                      key={post.id}
                      component="a"
                      href={`/blog/${post.id}`}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        '&:hover': {
                          opacity: 0.8
                        }
                      }}
                    >
                      {/* Thumbnail */}
                      <Box
                        sx={{
                          width: '60px',
                          height: '60px',
                          flexShrink: 0,
                          borderRadius: 1,
                          overflow: 'hidden'
                        }}
                      >
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </Box>

                      {/* Contenido */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666666',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            mb: 0.5
                          }}
                        >
                          {post.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#000000',
                            fontSize: '0.9rem',
                            fontWeight: 400,
                            lineHeight: 1.3
                          }}
                        >
                          {post.title}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
