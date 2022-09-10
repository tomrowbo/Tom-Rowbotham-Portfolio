import "../styles/globals.css";
import type {AppProps} from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CustomNavBar from "../components/navigation/CustomNavBar";
import {createTheme, ThemeProvider} from "@mui/material";

function MyApp({Component, pageProps}: AppProps) {
    const {window} = pageProps;
    const container =
        window !== undefined ? () => window().document.body : undefined;

    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Baloo Bhaijaan 2"', "cursive"
            ].join(','),
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="background-gradient">
                <CustomNavBar container={container}/>

                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
