import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import {
    AppBar,
    Box, Button,
    Drawer,
    IconButton,
    Menu, MenuItem, Toolbar,
    Typography
} from "@mui/material";
import NavDrawerContent from '../components/navigation/NavDrawerContent';


function MyApp({Component, pageProps}: AppProps) {
    const {window} = pageProps;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const logoSource = "/logo.png"
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Projects', 'Contact'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <div className="background-gradient">

                <AppBar className="appbar" component="nav" color="transparent" elevation={0}>
                <Container>
                    <Toolbar disableGutters>
                        <Box
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <img
                                src={logoSource}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },color:"white"}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {navItems.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1
                            }}
                        >
                            <img
                                src={logoSource}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    <NavDrawerContent handleDrawerToggle={ () => handleDrawerToggle() } navItems = {navItems} />

                </Drawer>
            </Box>

            <Component {...pageProps} />
        </div>)
}

export default MyApp
