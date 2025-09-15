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
import { CURRENT_FLAVOR, getCurrentFlavorConfig } from '@/types/favorGlobal';
import { flavorTexts } from '@/types/flavor';

export default function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getCurrentFlavorConfig();
  const texts = flavorTexts[CURRENT_FLAVOR];


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
               color: colors.textColor,
               lineHeight: 1.2,
               fontSize: { xs: '1.5rem', md: '2.5rem' },
             }}
           >
            {texts.contactTitle}
          </Typography>
          
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            sx={{
              maxWidth: { xs: '100%', md: '600px' },
              mx: 'auto',
              color: colors.textColor,
              lineHeight: 1.6,
              opacity: 0.8,
              fontSize: { xs: '0.875rem', md: '1.25rem' },
              px: { xs: 1, md: 0 },
            }}
          >
            {texts.contactSubtitle}
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
                 color: colors.textColor,
                 fontSize: { xs: '1rem', sm: '1.25rem' }
               }}>
                 {texts.contactEmailLabel}
               </Typography>
               <Typography variant="body2" sx={{ 
                 color: colors.textColor, 
                 opacity: 0.8,
                 fontSize: { xs: '0.8rem', sm: '0.875rem' }
               }}>
                 {texts.contactEmail}
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
                 color: colors.textColor,
                 fontSize: { xs: '1rem', sm: '1.25rem' }
               }}>
                 {texts.contactPhoneLabel}
               </Typography>
               <Typography variant="body2" sx={{ 
                 color: colors.textColor, 
                 opacity: 0.8,
                 fontSize: { xs: '0.8rem', sm: '0.875rem' }
               }}>
                 {texts.contactPhone}
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
                 color: colors.textColor,
                 fontSize: { xs: '1rem', sm: '1.25rem' },
                 mb: { xs: 1.5, sm: 2 }
               }}>
                 {texts.contactSocialLabel}
               </Typography>
               <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1.5, sm: 2 } }}>
                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    borderRadius: 1,
                    backgroundColor: colors.primaryColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors.secondaryColor,
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
                    backgroundColor: colors.primaryColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors.secondaryColor,
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
                    backgroundColor: colors.primaryColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: colors.secondaryColor,
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
                color: colors.textColor,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }}
            >
              {texts.contactAddressLabel}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3 },
                color: colors.textColor,
                opacity: 0.8,
                lineHeight: 1.6,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              {texts.contactAddress}
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
                src={`https://maps.google.com/maps?q=${encodeURIComponent(texts.contactAddress)}&t=m&z=15&output=embed&iwloc=near`}
                title={texts.contactAddress}
                aria-label={texts.contactAddress}
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
                color: colors.textColor,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }}
            >
              {texts.contactFormTitle}
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
                  <Typography variant="body2" sx={{ mb: 1, color: colors.textColor, fontWeight: 'medium' }}>
                    {texts.contactFormName}
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
                  <Typography variant="body2" sx={{ mb: 1, color: colors.textColor, fontWeight: 'medium' }}>
                    {texts.contactFormEmail}
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
                  <Typography variant="body2" sx={{ mb: 1, color: colors.textColor, fontWeight: 'medium' }}>
                    {texts.contactFormSubject}
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
                  <Typography variant="body2" sx={{ mb: 1, color: colors.textColor, fontWeight: 'medium' }}>
                    {texts.contactFormMessage}
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
                      backgroundColor: colors.primaryColor,
                      color: 'white',
                      borderRadius: 2,
                      boxShadow: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        backgroundColor: colors.primaryColor + 'FF',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    {texts.contactFormSubmit}
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
