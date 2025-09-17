'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  TextField,
  Button,
  Grid
} from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface ContactUsProps {
  selectedFlavor: Flavor;
}

export default function ContactUs({ selectedFlavor }: ContactUsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getColorsByFlavor(selectedFlavor);
  const content = getContentByFlavor(selectedFlavor);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };


  return (
    <Box
      sx={{
        width: '100%',
         py: { xs: 14, md: 20 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            px: { xs: 2, md: 3 },
          }}
        >
           <Typography
             variant={isMobile ? 'h5' : 'h3'}
             component="h1"
             sx={{
               fontWeight: 'bold',
               mb: { xs: 1.5, md: 2 },
               color: colors?.text.primary,
               lineHeight: 1.2,
               fontSize: { xs: '1.5rem', md: '2.5rem' },
             }}
           >
            {content?.contact.title}
          </Typography>
          
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            sx={{
              maxWidth: { xs: '100%', md: '600px' },
              mx: 'auto',
              color: colors?.text.primary,
              lineHeight: 1.6,
              opacity: 0.8,
              fontSize: { xs: '0.875rem', md: '1.25rem' },
              px: { xs: 1, md: 0 },
            }}
          >
            {content?.contact.description}
          </Typography>
        </Box>

        {/* Contact Information Cards */}
         <Box
           sx={{
             display: 'flex',
             flexDirection: { xs: 'column', sm: 'row' },
             gap: { xs: 2, sm: 3 },
             mb: { xs: 3, md: 6 },
             px: { xs: 1, md: 3 },
           }}
         >
          {/* Email Card */}
          <Card
            sx={{
              flex: 1,
              borderRadius: 3,
              boxShadow: 'none',
              border: '1px solid #e0e0e0',
              backgroundColor: '#ffffff',
            }}
          >
             <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
               <Typography variant="h6" sx={{ 
                 fontWeight: 'medium', 
                 mb: 1, 
                 color: colors?.text.primary,
                 fontSize: { xs: '1rem', sm: '1.25rem' }
               }}>
                 Email
               </Typography>
               <Typography variant="body2" sx={{ 
                 color: colors?.text.primary, 
                 opacity: 0.8,
                 fontSize: { xs: '0.8rem', sm: '0.875rem' }
               }}>
                 {content?.contact.email}
               </Typography>
             </CardContent>
          </Card>

          {/* Phone Card */}
          <Card
            sx={{
              flex: 1,
              borderRadius: 3,
              boxShadow: 'none',
              border: '1px solid #e0e0e0',
              backgroundColor: '#ffffff',
            }}
          >
             <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
               <Typography variant="h6" sx={{ 
                 fontWeight: 'medium', 
                 mb: 1, 
                 color: colors?.text.primary,
                 fontSize: { xs: '1rem', sm: '1.25rem' }
               }}>
                 Phone
               </Typography>
               <Typography variant="body2" sx={{ 
                 color: colors?.text.primary, 
                 opacity: 0.8,
                 fontSize: { xs: '0.8rem', sm: '0.875rem' }
               }}>
                 {content?.contact.phone}
               </Typography>
             </CardContent>
          </Card>

          {/* Social Network Card */}
          <Card
            sx={{
              flex: 1,
              borderRadius: 3,
              boxShadow: 'none',
              border: '1px solid #e0e0e0',
              backgroundColor: '#ffffff',
            }}
          >
             <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
               <Typography variant="h6" sx={{ 
                 fontWeight: 'medium', 
                 color: colors?.text.primary,
                 fontSize: { xs: '1rem', sm: '1.25rem' },
                 mb: { xs: 1.5, sm: 2 }
               }}>
                 Social Media
               </Typography>
               <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1.5, sm: 2 } }}>
                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    borderRadius: 1,
                    backgroundColor: colors?.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors?.secondary,
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Facebook sx={{ color: 'white', fontSize: { xs: 16, sm: 18 } }} />
                </Box>
                
                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    borderRadius: 1,
                    backgroundColor: colors?.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors?.secondary,
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Twitter sx={{ color: 'white', fontSize: { xs: 16, sm: 18 } }} />
                </Box>
                
                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    borderRadius: 1,
                    backgroundColor: colors?.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors?.secondary,
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <LinkedIn sx={{ color: 'white', fontSize: { xs: 16, sm: 18 } }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Main Content Area */}
         <Box
           sx={{
             display: 'flex',
             flexDirection: { xs: 'column', lg: 'row' },
             gap: { xs: 3, sm: 4 },
             px: { xs: 1, md: 3 },
           }}
         >
          {/* Address Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'medium',
                mb: { xs: 2, sm: 3 },
                color: colors?.text.primary,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }}
            >
              Address
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                color: colors?.text.primary,
                opacity: 0.8,
                lineHeight: 1.6,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              {content?.contact.address}
            </Typography>

            {/* Google Maps Component */}
            <div
              style={{
                width: '100%',
                height: window.innerWidth < 600 ? '250px' : '400px',
                borderRadius: '0px',
                border: 'none',
                overflow: 'hidden',
              }}
            >
              <iframe
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(content?.contact.address || 'Sydney, Australia')}&t=m&z=15&output=embed&iwloc=near`}
                title={content?.contact.address || 'Sydney, Australia'}
                aria-label={content?.contact.address || 'Sydney, Australia'}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'medium',
                mb: { xs: 2, sm: 3 },
                color: colors?.text.primary,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }}
            >
              Send us a Message
            </Typography>

            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: { xs: 2, sm: 3 },
                backgroundColor: 'white',
              }}
            >
              <Grid container spacing={{ xs: 2, sm: 3 }}>
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 1, color: colors?.text.primary, fontWeight: 'medium' }}>
                    Name
                  </Typography>
                  <TextField
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=""
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'white',
                      },
                    }}
                  />
                </Grid>
                
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 1, color: colors?.text.primary, fontWeight: 'medium' }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=""
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'white',
                      },
                    }}
                  />
                </Grid>
                
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 1, color: colors?.text.primary, fontWeight: 'medium' }}>
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder=""
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'white',
                      },
                    }}
                  />
                </Grid>
                
                <Grid size={12}>
                  <Typography variant="body2" sx={{ mb: 1, color: colors?.text.primary, fontWeight: 'medium' }}>
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'white',
                      },
                    }}
                  />
                </Grid>
                
                <Grid size={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      fontWeight: 'semibold',
                      backgroundColor: colors?.primary,
                      color: 'white',
                      borderRadius: 2,
                      boxShadow: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        backgroundColor: colors?.primary + 'FF',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
