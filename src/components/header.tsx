'use client';
import { AppBar, Box, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getColorsByFlavor, getLogoByFlavor, getCurrentFlavor } from '@/utils/flavors/settings';
import { routes } from '../routes';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    const selectedFlavor = getCurrentFlavor();
    const flavorColors = getColorsByFlavor(selectedFlavor);
    const logo = getLogoByFlavor(selectedFlavor);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', pt: 2 }}>
            <List>
                {routes.map((route) => (
                    <ListItem key={route.name} disablePadding sx={{ px: 3 }}>
                        <Link href={route.path} style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemText 
                                primary={route.label} 
                                sx={{ 
                                    textAlign: 'left',
                                    '& .MuiListItemText-primary': {
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        color: 'text.primary',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: flavorColors?.primary
                                        }
                                    }
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    if (!mounted) {
        return null;
    }

    return (
        <AppBar position="fixed" elevation={0} sx={{ 
            bgcolor: 'white', 
            color: 'text.primary', 
            zIndex: 1300, 
            py: { xs: 1, md: 2 },
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }} >
            <Container maxWidth="xl" sx={{ px: 0 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo a la izquierda */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ 
                            maxWidth: { xs: '120px', md: '150px' },
                            height: '40px'
                        }}>
                            <Image
                                src={logo?.main || "/YAKKA.webp"}
                                alt={logo?.alt || "YAKKA Logo"}
                                width={150}
                                height={40}
                                style={{ 
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                    </Box>
                    
                    {/* Navegación desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
                        {routes.map((route) => (
                            <Link key={route.name} href={route.path} style={{ textDecoration: 'none' }}>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: 'text.primary',
                                        cursor: 'pointer',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        '&:hover': {
                                            color: flavorColors?.primary
                                        }
                                    }}
                                >
                                    {route.label}
                                </Typography>
                            </Link>
                        ))}
                    </Box>

                    {/* Botón hamburguesa para móvil */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Drawer para móvil */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Mejor rendimiento en móvil
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    zIndex: 1400,
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: 250,
                        pt: 2,
                        zIndex: 1400
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
