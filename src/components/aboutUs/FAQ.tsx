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
import { getColorsByFlavor, getContentByFlavor } from '@/utils/flavors/settings';
import { Flavor } from '@/utils/flavors/settings/model_flavor';

interface FAQProps {
  selectedFlavor: Flavor;
}

export default function FAQ({ selectedFlavor }: FAQProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const colors = getColorsByFlavor(selectedFlavor);
  const content = getContentByFlavor(selectedFlavor);

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
              color: colors?.primary,
              mb: { xs: 1.5, sm: 2 },
              display: 'block',
            }}
          >
            FAQ
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
            Frequently Asked Questions
          </Typography>
          
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            sx={{
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              mx: 'auto',
              color: colors?.text.primary,
              lineHeight: { xs: 1.5, sm: 1.6 },
              opacity: 0.8,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            }}
          >
            Find answers to common questions about our services and processes
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
          {[
            {
              question: "What services do you offer?",
              answer: "We provide comprehensive construction and labor services including carpentry, electrical work, plumbing, painting, and more."
            },
            {
              question: "How do I get a quote?",
              answer: "Simply fill out our contact form or call us directly. We'll provide a detailed quote within 24 hours."
            },
            {
              question: "Do you work on weekends?",
              answer: "Yes, we offer flexible scheduling including weekends to accommodate your project timeline."
            },
            {
              question: "Are you licensed and insured?",
              answer: "Absolutely. We are fully licensed, bonded, and insured for your peace of mind."
            }
          ].map((item, index) => (
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
                expandIcon={<ExpandMoreIcon sx={{ color: colors?.primary, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />}
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
                    color: colors?.text.primary,
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
                    color: colors?.text.primary,
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
