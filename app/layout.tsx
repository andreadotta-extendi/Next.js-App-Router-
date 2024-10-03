import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.css";

import { Work_Sans } from "next/font/google"; // Updated to Work Sans
import Head from "next/head";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "./theme";

// Configurazione del font Work Sans con next/font
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Work Sans doesn't have 900 weight
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </Head>
      <body id="root" className={`${workSans.className} bg-background`}>
        {" "}
        {/* Updated font class */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
