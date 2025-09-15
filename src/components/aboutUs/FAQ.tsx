'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CURRENT_FLAVOR, getCurrentFlavorConfig } from '@/types/favorGlobal';
import { flavorTexts } from '@/types/flavor';

export default function FAQ() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getCurrentFlavorConfig();
  const texts = flavorTexts[CURRENT_FLAVOR];

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 3, sm: 4, md: 6 },
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
              fontWeight: 'bold',
              letterSpacing: { xs: 1.5, sm: 2 },
              color: colors.primaryColor,
              mb: { xs: 1.5, sm: 2 },
              display: 'block',
            }}
          >
            {texts.faqLabel}
          </Typography>
          
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, sm: 3 },
              color: colors.textColor,
              lineHeight: { xs: 1.1, sm: 1.2 },
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            {texts.faqTitle}
          </Typography>
          
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            sx={{
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              mx: 'auto',
              color: colors.textColor,
              lineHeight: { xs: 1.5, sm: 1.6 },
              opacity: 0.8,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            }}
          >
            {texts.faqDescription}
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box
          sx={{
            maxWidth: { xs: '100%', sm: '700px', md: '800px' },
            mx: 'auto',
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {texts.faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: { xs: 1.5, sm: 2 },
                borderRadius: { xs: 1.5, sm: 2 },
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                backgroundColor: '#ffffff',
                mx: { xs: 0, sm: 0 },
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: { xs: '0 0 12px 0', sm: '0 0 16px 0' },
                  backgroundColor: '#ffffff',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: colors.primaryColor, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />}
                sx={{
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1.5, sm: 2 },
                  minHeight: { xs: '48px', sm: '56px' },
                  '& .MuiAccordionSummary-content': {
                    margin: { xs: '8px 0', sm: '12px 0' },
                  },
                }}
              >
                <Typography
                  variant={isMobile ? 'subtitle1' : 'h6'}
                  sx={{
                    fontWeight: 'bold',
                    color: colors.textColor,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: { xs: 1.2, sm: 1.3 },
                    pr: { xs: 1, sm: 2 },
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: { xs: 2, sm: 3 },
                  pb: { xs: 2, sm: 3 },
                  pt: 0,
                }}
              >
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  sx={{
                    color: colors.textColor,
                    lineHeight: { xs: 1.5, sm: 1.6 },
                    opacity: 0.8,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
