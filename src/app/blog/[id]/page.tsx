'use client';

import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import { getCurrentFlavorConfig } from '../../../types/favorGlobal';
import { useParams } from 'next/navigation';

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
  const flavorConfig = getCurrentFlavorConfig();
  const params = useParams();
  const blogId = params.id as string;

  // Datos de ejemplo para diferentes posts del blog
  const blogPosts: { [key: string]: BlogPostDetail } = {
    '1': {
      id: '1',
      title: 'Hospitality jobs - The Future of Sports Employment',
      category: 'UNCATEGORIZED',
      date: 'AUGUST 31, 2025',
      image: '/home/machine-2691439_1280.jpg',
      author: 'Yakka Sport Team',
      readTime: '5 min read',
      content: `
        <p>Launching soon Australia's #1 Sport Jobs App. Stay tuned - we'll drop your exclusive invite link soon to download the app and start your journey in the sports industry.</p>
        
        <p>The sports industry in Australia is experiencing unprecedented growth, with new opportunities emerging across various sectors. From professional sports teams to recreational facilities, the demand for skilled professionals continues to rise.</p>
        
        <h3>Key Opportunities in Sports Employment</h3>
        
        <p>Whether you're interested in coaching, sports management, marketing, or facility operations, there are numerous career paths available. Our platform connects talented individuals with leading sports organizations across Australia.</p>
        
        <p>We understand that finding the right opportunity in sports can be challenging. That's why we've created a comprehensive platform that not only lists available positions but also provides resources for career development and networking within the sports community.</p>
        
        <h3>What Makes Us Different</h3>
        
        <p>Our app focuses specifically on the Australian sports market, ensuring that all opportunities are relevant and accessible to local talent. We work directly with employers to provide detailed job descriptions and requirements.</p>
        
        <p>Join thousands of sports professionals who are already using our platform to advance their careers. Download the app today and take the first step towards your dream job in sports.</p>
      `
    },
    '2': {
      id: '2',
      title: '20 Companies with Location-Agnostic Pay in 2024',
      category: 'SPEAKING',
      date: 'JULY 10, 2024',
      image: '/home/welding-6252829_1280.jpg',
      author: 'Sarah Johnson',
      readTime: '7 min read',
      content: `
        <p>Here's a running list of every company (and the remote jobs they offer) that has announced that where you work doesn't determine how much you get paid. This revolutionary approach to compensation is changing the landscape of remote work.</p>
        
        <p>In today's globalized economy, companies are recognizing that talent knows no geographical boundaries. By offering location-agnostic pay, these forward-thinking organizations are attracting the best candidates regardless of where they choose to live.</p>
        
        <figure>
          <img src="/home/machine-2691439_1280.jpg" alt="Remote work statistics and trends" />
          <figcaption>Remote work is becoming the new standard across industries</figcaption>
        </figure>
        
        <h3>Top Companies Leading the Way</h3>
        
        <p>From tech giants to innovative startups, companies across various industries are implementing this progressive compensation model. This not only benefits employees but also helps companies access a broader talent pool.</p>
        
        <p>The benefits of location-agnostic pay extend beyond just compensation. It promotes diversity, inclusion, and work-life balance while allowing companies to compete for top talent on a global scale.</p>
        
        <h3>Impact on the Future of Work</h3>
        
        <p>This trend is reshaping how we think about work, compensation, and career opportunities. As more companies adopt this model, we can expect to see significant changes in the job market and how professionals approach their careers.</p>
        
        <p>Whether you're a job seeker or an employer, understanding this shift is crucial for staying competitive in the evolving world of work.</p>
      `
    },
    '3': {
      id: '3',
      title: '13 Graphic Design Interview Questions',
      category: 'EDUCATION',
      date: 'JUNE 5, 2024',
      image: '/home/macon-4005192_1280.jpg',
      author: 'Michael Chen',
      readTime: '6 min read',
      content: `
        <p>Prepare for your next graphic design interview with these essential questions and expert tips. Whether you're a seasoned designer or just starting your career, these insights will help you stand out in your next interview.</p>
        
        <p>Graphic design interviews can be challenging, but with proper preparation, you can showcase your skills and creativity effectively. Understanding what employers are looking for is the first step to success.</p>
        
        <h3>Technical Skills Assessment</h3>
        
        <p>Employers want to see not just your creative abilities, but also your technical proficiency with design tools and software. Be prepared to discuss your experience with industry-standard applications and your approach to different design challenges.</p>
        
        <p>Portfolio presentation is crucial in graphic design interviews. Learn how to effectively communicate your design process, explain your creative decisions, and demonstrate your problem-solving abilities.</p>
        
        <h3>Creative Process and Collaboration</h3>
        
        <p>Design is often a collaborative process, so employers will want to understand how you work with teams, handle feedback, and manage multiple projects simultaneously.</p>
        
        <p>Stay updated with current design trends and be prepared to discuss how you incorporate them into your work while maintaining your unique creative voice.</p>
      `
    }
  };

  const blogPost = blogPosts[blogId] || blogPosts['1'];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        mt: { md: 12, xs: 4 }
      }}
    >
      {/* Banner grande con imagen */}
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
        {/* Overlay para mejor legibilidad del texto */}
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
          </Container>
        </Box>
      </Box>

      {/* Contenido principal centrado */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          {/* Información del post */}
          <Box sx={{ mb: { xs: 2, md: 4 } }}>
            <Typography
              variant="body2"
              sx={{
                color: flavorConfig.primaryColor,
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
                Por {blogPost.author}
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

          {/* Contenido del artículo */}
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
        </Box>
      </Container>
    </Box>
  );
}
