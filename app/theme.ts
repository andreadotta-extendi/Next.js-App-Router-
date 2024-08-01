"use client";
import { Poppins } from "next/font/google";
import { SimplePaletteColorOptions, createTheme } from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import taiwindConfig from '../tailwind.config'
import { CustomExtendConfig } from '@/tailwind.type';
import { Config } from 'tailwindcss/types/config';
import { colors } from "@mui/material";

const tc:any = taiwindConfig;
const extendConfig: CustomExtendConfig = tc.theme?.extend as CustomExtendConfig;
console.log(tc.theme)
declare module "@mui/material/styles" {
  interface Theme {
    customShadows: { default: string };
  }
  interface ThemeOptions {
    customShadows: { default: string };
  }
  interface Palette {
    complementary: SimplePaletteColorOptions;
    placeholder: SimplePaletteColorOptions;
    borders: SimplePaletteColorOptions;
    title: SimplePaletteColorOptions;
    paragraph: SimplePaletteColorOptions;
    overlay: SimplePaletteColorOptions & { opacity: number };
    gradient: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    complementary: SimplePaletteColorOptions;
    placeholder: SimplePaletteColorOptions;
    borders: SimplePaletteColorOptions;
    title: SimplePaletteColorOptions;
    paragraph: SimplePaletteColorOptions;
    overlay: SimplePaletteColorOptions & { opacity: number };
    gradient: SimplePaletteColorOptions;
  }

  interface TypographyVariantsOptions {
    h1: TypographyStyleOptions;
    h2: TypographyStyleOptions;
    h3: TypographyStyleOptions;
    h4: TypographyStyleOptions;
    h5: TypographyStyleOptions;
    "title-cta": TypographyStyleOptions;
    "title-small": TypographyStyleOptions;
    "paragraph-big": TypographyStyleOptions;
    "paragraph-small": TypographyStyleOptions;
    placeholder: TypographyStyleOptions;
    details: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    "title-cta": true;
    "title-small": true;
    "paragraph-big": true;
    "paragraph-small": true;
    placeholder: true;
    details: true;
    subtitle1: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    subtitle2: false;
    h6: false;
    inherit: false;
  }
}

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
   // mode: 'dark',
    primary: {
      light: extendConfig.colors?.primary.light,
      main: extendConfig.colors?.primary.main, // Colore primario
      dark: extendConfig.colors?.primary.dark,
    },
    secondary: {
      light: '#ff7961',
      main: extendConfig.colors?.secondary.main,
      dark: extendConfig.colors?.secondary.dark,
      contrastText: extendConfig.colors?.secondary.contrastText,
    },
    text: {
      primary: extendConfig.colors?.text.primary,
      secondary: extendConfig.colors?.text.secondary,
      disabled: extendConfig.colors?.text.disabled,
    },
    complementary: {
      main: "#A5FFAC", // Colore complementare
    },
    background: {
      default: "#FCFDFD", // Colore di sfondo
    },
    placeholder: {
      main: "#818084", // Placeholder
    },
    borders: {
      main: "#B8C9D7", // Borders
    },
    title: {
      main: "#34315F", // Titolo
    },
    paragraph: {
      main: "#434559", // Paragrafo
    },
    overlay: {
      main: "#34315F", // Overlay
      opacity: 0.7,
    },
    gradient: {
      main: "linear-gradient(-45deg, #8590FF 0%, #5767FF 100% )", // Gradient
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    h3: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "130%",
    },
    h4: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: "130%",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "130%",
    },
    "title-cta": {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "150%",
    },
    "paragraph-big": {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "150%",
    },
    "title-small": {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "140%",
    },
    placeholder: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "140%",
    },
    details: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "130%",
    },
    "paragraph-small": {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "130%",
    },
  },
  customShadows: {
    default: "0px 4px 20px rgba(0, 0, 0, 0.5)",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          borderRadius: "8px",

         "&.MuiButton-sizeLarge": {
            padding: "16px 32px",
          },

         "&.MuiButton-containedPrimary":{
            background: theme.palette.gradient.main,
            color: theme.palette.text.primary,
            boxShadow: "0 0 0 5px #6C7AFF25",
          },

         "&.Mui-disabled": {
            background: theme.palette.text.disabled,
            color: theme.palette.secondary.contrastText,
            boxShadow: "none",
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.title.main,
          fontWeight: 600,
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiPaginationItem-root": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.title.main,
          color: theme.palette.common.white,
          fontWeight: 600,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
        track: ({ theme }) => ({
          backgroundColor: theme.palette.borders.main,
        }),
        checked: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.5rem",
          boxShadow: theme.customShadows.default,
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.borders.main,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          borderRadius: "0.5rem",
          boxShadow: theme.customShadows.default,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.title.main,
          fontWeight: 600,
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          // Input
          "& .MuiInputBase-input":{
            border: "1px solid #8C8D97", // Action Divider
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
          },
          // Variant Outlined
          "& .MuiOutlinedInput-root":{
            color: theme.palette.text.primary,
            borderRadius: "8px",
            backgroundColor: "transparent",
          },
          // Label
          "& .MuiInputLabel-root":{
            color: theme.palette.text.primary,
            position: "relative",
            transform: "none",
            marginBottom: "6px",
          },
          "& .MuiInputBase-input:hover":{
            border: "1px solid #8C8D97", // Action Divider
          },
          // Focused
          "& .Mui-focused":{
            color: theme.palette.text.primary, // text primary
          },
          "& .Mui-focused .MuiInputLabel-root":{
            color: "#E2E3E9 !important", // text primary
            marginBottom: "4px",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor: "#6C7AFF !important", // primary main
          },
           "& .Mui-focused .MuiInputBase-input":{
            backgroundColor: "#393A47 !important", // Action focus
          },
          // hide notchedOutline
          "& .MuiOutlinedInput-notchedOutline legend":{
            display: "none !important",
          },
          ".MuiOutlinedInput-notchedOutline": {
             borderColor: "#8C8D97 !important", // Action Divider
             top: "0",
          },
          // Placeholder Color
          "& label[data-shrink=false]+.MuiInputBase-formControl ::-webkit-input-placeholder": {
            opacity: "1 !important",
            color: theme.palette.text.secondary, // text secondary
          },
        }),
        
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
       root: ({ theme }) => ({
        color: theme.palette.text.primary,        
       }),
      },
    },
  },
});

export default theme;
