import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight:["300", "400", "500", "600", "700", "800", "900"],
});
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./global.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
{/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider  options={{ key: 'css' }}>
      <ThemeProvider theme={theme}>
        <body className={poppins.className}>{children}</body>
      </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
