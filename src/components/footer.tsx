'use client';

import { Box, Container, Typography, IconButton } from "@mui/material";
import { Language as LanguageIcon, AttachMoney as MoneyIcon } from '@mui/icons-material';
import { getCurrentFlavorConfig } from '../types/favorGlobal';

export default function Footer() {
    const flavorConfig = getCurrentFlavorConfig();
    
    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: flavorConfig.backgroundColor, 
                color: flavorConfig.textColor,
                py: 3,
                mt: 'auto'
            }}
        >
            <Container maxWidth="xl">
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: 2
                    }}
                >

                    {/* Copyright */}
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            color: flavorConfig.textColor,
                            textAlign: 'center',
                            order: { xs: 1, md: 2 }
                        }}
                    >
                        © 2024 YAKKA Sport. All Rights Reserved.
                    </Typography>

                    {/* Idioma y Moneda */}
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        order: { xs: 2, md: 3 }
                    }}>
                        {/* Idioma */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LanguageIcon sx={{ color: flavorConfig.textColor, fontSize: 20 }} />
                            <Typography 
                                variant="body2" 
                                sx={{ color: flavorConfig.textColor, fontSize: '0.9rem' }}
                            >
                                English
                            </Typography>
                        </Box>

                        {/* Moneda */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box 
                                sx={{ 
                                    width: 20, 
                                    height: 20, 
                                    borderRadius: '50%', 
                                    bgcolor: flavorConfig.textColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <MoneyIcon sx={{ color: flavorConfig.backgroundColor, fontSize: 14 }} />
                            </Box>
                            <Typography 
                                variant="body2" 
                                sx={{ color: flavorConfig.textColor, fontSize: '0.9rem' }}
                            >
                                USD
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}