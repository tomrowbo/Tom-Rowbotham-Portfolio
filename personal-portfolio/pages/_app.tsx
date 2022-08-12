import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, NavDropdown} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import {
    AppBar,
    Box, Button,
    Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Toolbar,
    Typography
} from "@mui/material";

const logoSource = "/logo.png"
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

function MyApp({Component, pageProps}: AppProps) {
    const {window} = pageProps;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logo = (
        <img
            src={logoSource}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />);

    const drawer = (
        <Box color="white" onClick={handleDrawerToggle} sx={{textAlign: 'center', backgroundColor: "#041B2D"}}>
            {logo}
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (


        <div className="background-gradient">
            <AppBar component="nav" color="transparent" elevation={0}>
                <Toolbar>
                    <Container>
                        <IconButton
                            style={{ color: 'white' }}
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {/*Logo goes here*/}
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{color: '#fff'}}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Container>
                </Toolbar>
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
                    {drawer}
                </Drawer>
            </Box>

            <Component {...pageProps} />
        </div>)
}

export default MyApp
