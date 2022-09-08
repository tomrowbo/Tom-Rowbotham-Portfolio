import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CustomNavBar from "../components/navigation/CustomNavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const { window } = pageProps;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="background-gradient">
      <CustomNavBar container={container} />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
