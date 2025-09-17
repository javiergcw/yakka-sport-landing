'use client';

import { Box, Container, Typography } from "@mui/material";
import { Language as LanguageIcon, AttachMoney as MoneyIcon } from '@mui/icons-material';
import { getCurrentFlavorConfig } from '@/utils/flavors/global-config';

export default function Footer() {
    const flavorConfig = getCurrentFlavorConfig();

    if (!flavorConfig) return null;

    return (
        <Box

            component="footer"
            sx={{
                bgcolor: flavorConfig.background,
                color: flavorConfig.text.primary,
                py: 3,
                mt: 'auto',
                position: 'relative',
                zIndex: 9999
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
                            color: flavorConfig.text.primary,
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
                            <LanguageIcon sx={{ color: flavorConfig.text.primary, fontSize: 20 }} />
                            <Typography
                                variant="body2"
                                sx={{ color: flavorConfig.text.primary, fontSize: '0.9rem' }}
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
                                    bgcolor: flavorConfig.text.primary,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <MoneyIcon sx={{ color: flavorConfig.background, fontSize: 14 }} />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ color: flavorConfig.text.primary, fontSize: '0.9rem' }}
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