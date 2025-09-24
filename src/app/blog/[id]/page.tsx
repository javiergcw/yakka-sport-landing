'use client';

import { Box, Container, Typography, Breadcrumbs, Link, CircularProgress, Alert, Skeleton } from "@mui/material";
import { getColorsByFlavor, getCurrentFlavor } from '@/utils/flavors/settings';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogIdUseCase } from '@/core/use-case/blog/blog_id_use_case';
import { DtoReceiveBannersGetId } from '@/core/dto/blog/dto_receive_banners_get_id';

interface BlogPostDetail {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
  author: string;
  readTime: string;
}

export default function BlogDetailPage() {
  const selectedFlavor = getCurrentFlavor();
  const flavorColors = getColorsByFlavor(selectedFlavor);
  const params = useParams();
  const blogId = params.id as string;
  
  const [blogData, setBlogData] = useState<DtoReceiveBannersGetId | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogData = async () => {
      setLoading(true);
      setError(null);
      
      const result = await blogIdUseCase.getBlogById(blogId);
      
      if (result.success && result.data) {
        setBlogData(result.data);
      } else {
        setError(result.error || 'Could not load blog');
      }
      
      setLoading(false);
    };

    if (blogId) {
      loadBlogData();
    }
  }, [blogId]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase();
  };


  const getBlogPostData = (): BlogPostDetail => {
    if (blogData?.data) {
      const data = blogData.data;
      return {
        id: data.id.toString(),
        title: data.title,
        category: data.category.name.toUpperCase(),
        date: formatDate(data.date_created),
        image: data.image ? `https://cms.yakkasport.com.au/assets/${data.image}.jpg` : '/home/machine-2691439_1280.jpg',
        content: data.description || '',
        author: data.author.name,
        readTime: data.minute_read ? `${data.minute_read} min read` : '5 min read'
      };
    }
    
    return {
      id: blogId,
      title: 'Blog Post',
      category: 'UNCATEGORIZED',
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).toUpperCase(),
      image: '/home/machine-2691439_1280.jpg',
      content: '',
      author: 'Unknown',
      readTime: '5 min read'
    };
  };

  const blogPost = getBlogPostData();

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          mt: { md: 12, xs: 4 }
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '200px', md: '500px' },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%" 
            animation="wave"
          />
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            <Box sx={{ mb: { xs: 2, md: 4 } }}>
              <Skeleton 
                variant="text" 
                width="20%" 
                height={20} 
                sx={{ mb: 1 }}
                animation="wave"
              />
              
              <Skeleton 
                variant="text" 
                width="90%" 
                height={60} 
                sx={{ mb: 2 }}
                animation="wave"
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 0.5, sm: 3 },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: { xs: 2, md: 4 },
                  pb: { xs: 2, md: 3 },
                  borderBottom: '1px solid #e0e0e0'
                }}
              >
                <Skeleton 
                  variant="text" 
                  width="30%" 
                  height={20}
                  animation="wave"
                />
                <Skeleton 
                  variant="text" 
                  width="25%" 
                  height={20}
                  animation="wave"
                />
                <Skeleton 
                  variant="text" 
                  width="20%" 
                  height={20}
                  animation="wave"
                />
              </Box>
            </Box>

            <Box>
              <Skeleton 
                variant="text" 
                width="100%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="100%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="95%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="100%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="90%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="100%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
              <Skeleton 
                variant="text" 
                width="85%" 
                height={24} 
                sx={{ mb: 2 }}
                animation="wave"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          mt: { md: 12, xs: 4 },
          py: 8,
          px: { xs: 2, md: 4 }
        }}
      >
        <Container maxWidth="lg">
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Could not load blog
            </Typography>
            <Link href="/blog" sx={{ color: flavorColors?.primary }}>
               Back to blog
            </Link>
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
        mt: { md: 12, xs: 4 }
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { xs: '200px', md: '500px' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          src={blogPost.image}
          alt={blogPost.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            p: { xs: 2, md: 4 }
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs
              sx={{
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '& .MuiBreadcrumbs-separator': {
                  color: '#ffffff'
                }
              }}
            >
              <Link
                href="/"
                sx={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Home
              </Link>
              <Link
                href="/blog"
                sx={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Blog
              </Link>
              <Typography sx={{ color: '#ffffff' }}>
                {blogPost.title}
              </Typography>
            </Breadcrumbs>
            
            <Box sx={{ mt: 2 }}>
              <Link
                href="/blog"
                sx={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
              Back to Blog
              </Link>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Box sx={{ mb: { xs: 2, md: 4 } }}>
            <Typography
              variant="body2"
              sx={{
                color: flavorColors?.primary,
                fontSize: { xs: '0.75rem', md: '0.9rem' },
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 1
              }}
            >
              {blogPost.category}
            </Typography>
            
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: '#000000',
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1.4rem', md: '2.5rem' },
                lineHeight: 1.2
              }}
            >
              {blogPost.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 0.5, sm: 3 },
                alignItems: { xs: 'flex-start', sm: 'center' },
                mb: { xs: 2, md: 4 },
                pb: { xs: 2, md: 3 },
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  fontSize: { xs: '0.75rem', md: '0.9rem' },
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {blogPost.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  fontSize: { xs: '0.75rem', md: '0.9rem' }
                }}
              >
                By {blogPost.author}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  fontSize: { xs: '0.75rem', md: '0.9rem' }
                }}
              >
                {blogPost.readTime}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              '& h3': {
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 'bold',
                color: '#000000',
                mb: { xs: 1, md: 2 },
                mt: { xs: 2, md: 4 }
              },
              '& p': {
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: '#333333',
                mb: { xs: 2, md: 3 }
              },
              '& ul, & ol': {
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: '#333333',
                mb: { xs: 2, md: 3 },
                pl: { xs: 2, md: 3 }
              },
              '& li': {
                mb: { xs: 0.5, md: 1 }
              },
              '& img': {
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                mb: { xs: 2, md: 3 },
                mt: { xs: 2, md: 3 },
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                display: 'block',
                mx: 'auto'
              },
              '& figure': {
                margin: { xs: '16px 0', md: '24px 0' },
                textAlign: 'center'
              },
              '& figcaption': {
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                color: '#666666',
                fontStyle: 'italic',
                mt: 1,
                textAlign: 'center'
              }
            }}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Link
              href="/blog"
              sx={{
                color: flavorColors?.primary,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                padding: '12px 24px',
                border: `1px solid ${flavorColors?.primary}`,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: flavorColors?.primary,
                  color: '#ffffff',
                  textDecoration: 'none'
                }
              }}
            >
             Back to Blog
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
