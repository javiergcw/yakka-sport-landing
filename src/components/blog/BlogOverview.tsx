'use client';

import { Box, Container, Typography, Grid, Skeleton, Pagination, Stack } from "@mui/material";
import { getColorsByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';
import { blogUseCase } from '@/core/use-case/blog/blog.use-case';
import { blogCategoryUseCase } from '@/core/use-case/category/blog_category_use_case';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  categoryId: number;
  date: string;
  image: string;
  readMoreLink: string;
}

interface Category {
  id: number;
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
  const [blogData, setBlogData] = useState<any>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const loadBlogData = async (page: number = 1) => {
      try {
        setLoading(true);
        const result = await blogUseCase.getBlogPosts(page, 25);
        setBlogData(result);
        if (result.success && result.data?.pagination) {
          setTotalPages(result.data.pagination.totalPages);
        }
      } catch (error) {
        console.error('Error loading blog data:', error);
        setBlogData(null);
      } finally {
        setLoading(false);
      }
    };

    const loadCategories = async () => {
      try {
        setCategoriesLoading(true);
        const result = await blogCategoryUseCase.getAllCategories();
        if (result.success && result.data) {
          setCategories(result.data.data);
        } else {
          console.error('Error loading categories:', result.error);
          setCategories([]);
        }
      } catch (error) {
        console.error('Error loading categories:', error);
        setCategories([]);
      } finally {
        setCategoriesLoading(false);
      }
    };

    loadBlogData(currentPage);
    loadCategories();
  }, [currentPage]);
  
  const stripHtml = (html: string): string => {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  };

  const generateExcerpt = (content: string, maxLength: number = 150): string => {
    const cleanText = stripHtml(content);
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength).trim() + '...'
      : cleanText;
  };
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase();
  };

  // Función para filtrar posts por categoría
  const filterPostsByCategory = (posts: any[], categoryId: number | null) => {
    if (!categoryId) return posts;
    return posts.filter(post => post.category.id === categoryId);
  };

  const allBlogPosts: BlogPost[] = blogData?.success && blogData.data?.data && blogData.data.data.length > 0
    ? blogData.data.data.map((post: any) => ({
        id: post.id.toString(),
        title: post.title,
        excerpt: post.description ? stripHtml(post.description) : '',
        category: post.category.name.toUpperCase(),
        categoryId: post.category.id,
        date: formatDate(post.date_created),
        image: post.image ? `https://cms.yakkasport.com.au/assets/${post.image}.jpg` : '/home/machine-2691439_1280.jpg',
        readMoreLink: `/blog/${post.id}`
      }))
    : [];

  // Filtrar posts por categorías seleccionadas
  const blogPosts: BlogPost[] = selectedCategories.length > 0 
    ? allBlogPosts.filter(post => selectedCategories.includes(post.categoryId))
    : allBlogPosts;

  // Las categorías se cargan dinámicamente desde la API
  const displayCategories = categories;

  // Función para manejar la selección de categorías (múltiple)
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Función para limpiar el filtro
  const handleClearFilter = () => {
    setSelectedCategories([]);
  };

  // Función para manejar el cambio de página
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    setSelectedCategories([]); // Limpiar filtros al cambiar página
  };

  const latestPosts: LatestPost[] = blogData?.success && blogData.data?.data && blogData.data.data.length > 0
    ? blogData.data.data.slice(0, 3).map((post: any) => ({
        id: post.id.toString(),
        title: post.title,
        date: formatDate(post.date_created),
        thumbnail: post.image ? `https://cms.yakkasport.com.au/assets/${post.image}.jpg` : '/home/machine-2691439_1280.jpg'
      }))
    : [];

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          py: 8,
          px: { xs: 0, md: 4 },
          mt: {md:12, xs:4}
        }}
      >
        <Container maxWidth="xl">
          <Skeleton 
            variant="text" 
            width="20%" 
            height={60} 
            sx={{ mb: 4 }}
            animation="wave"
          />
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, lg: 6 }
          }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[1, 2, 3, 4].map((index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: { xs: 2, md: 3 },
                      alignItems: { xs: 'stretch', md: 'flex-start' },
                      height: { xs: 'auto', md: '200px' }
                    }}
                  >
                    <Skeleton 
                      variant="rectangular" 
                      width="100%" 
                      height="200px"
                      animation="wave"
                      sx={{
                        width: { xs: '100%', md: '300px' },
                        height: { xs: '200px', md: '200px' }
                      }}
                    />
                    
                    <Box sx={{ flex: 1 }}>
                      <Skeleton 
                        variant="text" 
                        width="30%" 
                        height={20} 
                        sx={{ mb: 1 }}
                        animation="wave"
                      />
                      <Skeleton 
                        variant="text" 
                        width="80%" 
                        height={40} 
                        sx={{ mb: 2 }}
                        animation="wave"
                      />
                      <Skeleton 
                        variant="text" 
                        width="100%" 
                        height={20} 
                        sx={{ mb: 1 }}
                        animation="wave"
                      />
                      <Skeleton 
                        variant="text" 
                        width="90%" 
                        height={20} 
                        sx={{ mb: 1 }}
                        animation="wave"
                      />
                      <Skeleton 
                        variant="text" 
                        width="15%" 
                        height={20} 
                        animation="wave"
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ 
              width: { xs: '100%', lg: '300px' }, 
              flexShrink: 0 
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Box>
                  <Skeleton 
                    variant="text" 
                    width="40%" 
                    height={30} 
                    sx={{ mb: 3 }}
                    animation="wave"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <Skeleton 
                        key={index}
                        variant="text" 
                        width="60%" 
                        height={20}
                        animation="wave"
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Skeleton 
                    variant="text" 
                    width="50%" 
                    height={30} 
                    sx={{ mb: 3 }}
                    animation="wave"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[1, 2, 3].map((index) => (
                      <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Skeleton 
                          variant="rectangular" 
                          width="60px" 
                          height="60px"
                          animation="wave"
                        />
                        <Box sx={{ flex: 1 }}>
                          <Skeleton 
                            variant="text" 
                            width="40%" 
                            height={16} 
                            sx={{ mb: 0.5 }}
                            animation="wave"
                          />
                          <Skeleton 
                            variant="text" 
                            width="100%" 
                            height={20} 
                            animation="wave"
                          />
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
            {selectedCategories.length > 0 && (
              <Typography
                variant="body2"
                onClick={handleClearFilter}
                sx={{
                  color: flavorColors?.primary,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  border: '1px solid #e0e0e0',
                  marginBottom: '12px',
                  display: 'inline-block',
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: flavorColors?.primary
                  }
                }}
              >
                Clear Filter ({selectedCategories.length})
              </Typography>
            )}
            {displayCategories.length > 0 && (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 1
              }}>
                {displayCategories.map((category) => (
                  <Typography
                    key={category.id}
                    variant="body2"
                    onClick={() => handleCategorySelect(category.id)}
                    sx={{
                      color: selectedCategories.includes(category.id) ? '#ffffff' : '#000000',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      backgroundColor: selectedCategories.includes(category.id) 
                        ? flavorColors?.primary 
                        : '#f5f5f5',
                      borderRadius: '4px',
                      border: selectedCategories.includes(category.id) 
                        ? `1px solid ${flavorColors?.primary}` 
                        : '1px solid #e0e0e0',
                      '&:hover': {
                        color: selectedCategories.includes(category.id) ? '#ffffff' : flavorColors?.primary,
                        backgroundColor: selectedCategories.includes(category.id) 
                          ? flavorColors?.primary 
                          : flavorColors?.primary + '20'
                      }
                    }}
                  >
                    {category.name}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            {blogPosts.length === 0 ? (
              <Box sx={{ 
                textAlign: 'center', 
                py: 8,
                px: 4
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#666666',
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  {selectedCategories.length > 0 ? 'No posts found for this category' : 'No blogs available'}
                </Typography>
                {selectedCategories.length > 0 && (
                  <Typography
                    variant="body2"
                    onClick={handleClearFilter}
                    sx={{
                      color: flavorColors?.primary,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      '&:hover': {
                        opacity: 0.8
                      }
                    }}
                  >
                    View all posts
                  </Typography>
                )}
              </Box>
            ) : (
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
                        {post.content ? generateExcerpt(post.content) : post.excerpt}
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
            )}
          </Box>

          <Box sx={{ 
            width: { xs: '100%', lg: '300px' }, 
            flexShrink: 0 
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
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
                {selectedCategories.length > 0 && (
                  <Typography
                    variant="body2"
                    onClick={handleClearFilter}
                    sx={{
                      color: flavorColors?.primary,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      marginBottom: '12px',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Clear Filter ({selectedCategories.length})
                  </Typography>
                )}
                {displayCategories.length > 0 && (
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 1
                  }}>
                    {displayCategories.map((category) => (
                      <Typography
                        key={category.id}
                        variant="body2"
                        onClick={() => handleCategorySelect(category.id)}
                        sx={{
                          color: selectedCategories.includes(category.id) ? flavorColors?.primary : '#000000',
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          fontWeight: selectedCategories.includes(category.id) ? 'bold' : 'normal',
                          '&:hover': {
                            color: flavorColors?.primary
                          }
                        }}
                      >
                        {category.name}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>

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
                {latestPosts.length > 0 && (
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
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Paginación */}
        {totalPages > 1 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 6,
            mb: 4
          }}>
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#000000',
                    '&.Mui-selected': {
                      backgroundColor: flavorColors?.primary,
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: flavorColors?.primary,
                        opacity: 0.8
                      }
                    },
                    '&:hover': {
                      backgroundColor: flavorColors?.primary + '20',
                      color: flavorColors?.primary
                    }
                  }
                }}
              />
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
