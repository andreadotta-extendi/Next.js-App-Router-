"use client";
import { Poppins } from "next/font/google";
import { SimplePaletteColorOptions, createTheme } from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import taiwindConfig from '../tailwind.config'
import { CustomExtendConfig } from '@/tailwind.type';
import { Config } from 'tailwindcss/types/config';
import { colors } from "@mui/material";
import { BorderColor, Height, Margin } from "@mui/icons-material";

declare module '@mui/material/styles' {
  interface TypeAction {
    divider?: string;
  }
}

const tc:any = taiwindConfig;
const extendConfig: CustomExtendConfig = tc.theme?.extend as CustomExtendConfig;


declare module '@mui/material/styles' {
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
    neutral: SimplePaletteColorOptions;
    paper: SimplePaletteColorOptions;
    actions?: SimplePaletteColorOptions;
    divider: string;
  }
  interface PaletteOptions {
    complementary: SimplePaletteColorOptions;
    placeholder: SimplePaletteColorOptions;
    borders: SimplePaletteColorOptions;
    title: SimplePaletteColorOptions;
    neutral: SimplePaletteColorOptions;
    paragraph: SimplePaletteColorOptions;
    overlay: SimplePaletteColorOptions & { opacity: number };
    gradient: SimplePaletteColorOptions;
    paper: SimplePaletteColorOptions;
    actions?: SimplePaletteColorOptions;
  }
  interface TypographyVariants {
    h1: TypographyStyleOptions;
    h2: TypographyStyleOptions;
    h3: TypographyStyleOptions;
    h4: TypographyStyleOptions;
    h5: TypographyStyleOptions;
    "s1": TypographyStyleOptions;
    "s2": TypographyStyleOptions;
    "body-500":  TypographyStyleOptions;
    "body-400": TypographyStyleOptions;
    "title-cta": TypographyStyleOptions;
    "title-small": TypographyStyleOptions;
    "paragraph-big": TypographyStyleOptions;
    "paragraph-small": TypographyStyleOptions;
    "body-small-500": TypographyStyleOptions;
    "body-small-400": TypographyStyleOptions;
    "caption-500": TypographyStyleOptions;
    "caption-400": TypographyStyleOptions;
    "caption-small-500": TypographyStyleOptions;
    "button-xl": TypographyStyleOptions;
    "button-l": TypographyStyleOptions;
    "button-m": TypographyStyleOptions;
    "button-s": TypographyStyleOptions;
    placeholder: TypographyStyleOptions;
    details: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    h1: TypographyStyleOptions;
    h2: TypographyStyleOptions;
    h3: TypographyStyleOptions;
    h4: TypographyStyleOptions;
    h5: TypographyStyleOptions;
    "s1": TypographyStyleOptions;
    "s2": TypographyStyleOptions;
    "body-500":  TypographyStyleOptions;
    "body-400": TypographyStyleOptions;
    "title-cta": TypographyStyleOptions;
    "title-small": TypographyStyleOptions;
    "paragraph-big": TypographyStyleOptions;
    "paragraph-small": TypographyStyleOptions;
    "body-small-500": TypographyStyleOptions;
    "body-small-400": TypographyStyleOptions;
    "caption-500": TypographyStyleOptions;
    "caption-400": TypographyStyleOptions;
    "caption-small-500": TypographyStyleOptions;
    "button-xl": TypographyStyleOptions;
    "button-l": TypographyStyleOptions;
    "button-m": TypographyStyleOptions;
    "button-s": TypographyStyleOptions;
    placeholder: TypographyStyleOptions;
    details: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    "s1": true;
    "s2": true;
    "body-500": true;
    "body-400": true;
    "title-cta": true;
    "title-small": true;
    "paragraph-big": true;
    "paragraph-small": true;
    "body-small-500": true;
    "body-small-400": true;
    "caption-500": true;
    "caption-400": true;
    "caption-small-500": true;
    "button-xl": true;
    "button-l": true;
    "button-m": true;
    "button-s": true;
    placeholder: true;
    details: true;
  }
}


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      light: extendConfig.colors?.primary.light,
      main: extendConfig.colors?.primary.main, // Colore primario
      dark: extendConfig.colors?.primary.dark,
    },
    secondary: {
      light: extendConfig.colors?.secondary.light,
      main: extendConfig.colors?.secondary.main,
      dark: extendConfig.colors?.secondary.dark,
      contrastText: extendConfig.colors?.secondary.contrastText,
    },
    complementary: {
      light: extendConfig.colors?.complementary.light,
      main: extendConfig.colors?.complementary.main,
      dark: extendConfig.colors?.complementary.dark,
    },
    error: {
      light: extendConfig.colors?.error.light,
      main: extendConfig.colors?.error.main,
      dark: extendConfig.colors?.error.dark,
    },
    text: {
      primary: extendConfig.colors?.text.primary,
      secondary: extendConfig.colors?.text.secondary,
      disabled: extendConfig.colors?.text.disabled,
    },
    paper: {
      main: extendConfig.colors?.paper,
    },
    action: {
      divider: extendConfig.colors?.action.divider,
      focus: extendConfig.colors?.action.focus,
    },
    background: {
      default: "#1C1D22", // Colore di sfondo
    },
    neutral:{
      main: "#54566870"
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
      // main: "linear-gradient(45deg, #8590FF 0%, #5767FF 100% ) ", // Gradient
      main: "#5767FF", // Gradient
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "58px",
    },
    h2: {
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "40px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "38px",
    },
    h4: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "34px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    "s1": {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    "s2": {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    "body-500":{
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    "body-400":{
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    "body-small-500":{
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    "body-small-400":{
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    "caption-500":{
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    "caption-400":{
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    "caption-small-500":{
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "14px",
    },
    "button-xl":{
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    "button-l":{
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    "button-m":{
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    "button-s":{
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    } ,
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

          // size
         "&.MuiButton-sizeLarge": {
            padding: "16px 32px",
          },

          "&.MuiButton-sizeMedium": {
            padding: "14px 32px",
          },

          "&.MuiButton-sizeSmall": {
            padding: "10px 32px",
          },

          // color
         "&.MuiButton-containedPrimary":{
            background: theme.palette.gradient.main,
            color: theme.palette.text.primary,
            boxShadow: "0 0 0 5px #6C7AFF25",
          },

          "&.MuiButton-containedSecondary":{
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },

          "&.MuiButton-containedPrimary:hover":{
            background: theme.palette.primary.dark,
          },

          "&.MuiButton-containedSecondary:hover":{
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
          },


          "&.MuiButton-text":{
            color: theme.palette.primary.dark,
          },

          // disabled
         "&.Mui-disabled": {
            background: theme.palette.text.disabled,
            color: theme.palette.secondary.contrastText,
            boxShadow: "none",
          },
          
        }),
      },
    },
   MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.primary.main,
            "&.Mui-disabled": {
            color: theme.palette.text.disabled,
          },
        }),
        colorInherit: ({ theme }) => ({
          borderRadius: theme.spacing(1),
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          "&.Mui-disabled": {
          border: `1px solid ${theme.palette.text.disabled}`,
          color: theme.palette.text.disabled,
        },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(0.75),
          padding: `${theme.spacing(0.25)} ${theme.spacing(0.5)}`,
        }),
        labelSmall: ({ theme }) => ({
          padding: `0px ${theme.spacing(0.5)}`,
        }),
        avatar: ({ theme }) => ({
          marginLeft: "0px",
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
          borderRadius: theme.spacing(2),
          backgroundColor:theme.palette.paper.main,
          "&.MuiPaper-outlined": {
             borderColor: "#8C8D97", // Action Divider
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(2),
        }),
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1),
          borderRadius: theme.spacing(2.5),
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(2),
          backgroundColor: theme.palette.paper.main,
          border: "1px solid #8C8D97",
          "&.Mui-expanded": {
            margin: "0px",
          },
          "&.filter-accordion": {
            border: "none",
            boxShadow: "none",
          },
        }),
      },
    },
    MuiAccordionSummary:  { 
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: "auto",
          "&.Mui-expanded": {
            minHeight: "auto",
          },
        }),
        content: ({ theme }) => ({
           margin: "16px 0px !important",
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
        root: ({ theme }: any) => ({
          color: theme.palette.text.primary,

          // Focused
          '& .Mui-focused .MuiOutlinedInput-root': {
            color: theme.palette.text.primary,
          },
          '& .Mui-focused .MuiInputLabel-root': {
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(0.5),
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6C7AFF !important', // primary main
          },
          // Nascondi il notchedOutline
          '& .MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
          },
          '& .MuiOutlinedInput-notchedOutline legend': {
            display: 'none !important',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#8C8D97 !important', // Action Divider
            top: '0',
          },

          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #1C1D22 inset !important', // Sfondo specifico
            WebkitTextFillColor: '#fff !important', // Colore del testo
            caretColor: '#fff !important',
          },
          '& input:-webkit-autofill:focus': {
            WebkitBoxShadow: '0 0 0 100px #1C1D22 inset !important',
            WebkitTextFillColor: '#fff !important',
            caretColor: '#fff !important',
          },
          '& input[type="password"]:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #1C1D22 inset !important', // Background color fix for password field
            WebkitTextFillColor: '#fff !important', // Text color inside autofill
            caretColor: '#fff !important',
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #1C1D22 inset !important', // Sfondo specifico
            WebkitTextFillColor: '#fff !important', // Colore del testo
            caretColor: '#fff !important',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          // Input
          "& .MuiInputBase-input":{
            padding: theme.spacing(2),
            fontSize: "14px",
            border: "none",
          },
          "& .MuiInputBase-formControl":{
            color: theme.palette.text.primary,
            border: "1px inset #8C8D97", // Action Divider
            borderRadius: theme.spacing(1),
          },

          // Variant Outlined
          "& .MuiOutlinedInput-root":{
            color: theme.palette.text.primary,
            border: "none",
            backgroundColor: "transparent !important",
          },

          // Label
          "& .MuiInputLabel-root":{
            color: theme.palette.text.primary,
            position: "relative",
            transform: "none",
            marginBottom: "6px",
            fontWeight: "500",
          },

          // "& .MuiInputBase-input:hover":{
          //  border: "1px inset #8C8D97", // Action Divider
          // },

          // Focused
          "& .Mui-focused.MuiOutlinedInput-root":{
            color: theme.palette.text.primary, // text primary
            backgroundColor: "#393A47 !important", // Action focus
            
          },
          "& .Mui-focused .MuiInputLabel-root":{
            color: (theme.palette.text.primary, "!important"),
            marginBottom: theme.spacing(0.5),
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
             borderColor: (theme.palette.primary.main, "!important"),
             top: "0",
          },

          // hide notchedOutline
          "& .MuiOutlinedInput-notchedOutline legend":{
            display: "none !important",
          },
          "& .MuiOutlinedInput-notchedOutline": {
             borderColor: "#8C8D97", // Action Divider
             top: "0",
          },
          

          // adornment color
          "& .MuiIconButton-root": {
            color: theme.palette.text.secondary,
          },
        }),
        
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
       root: ({ theme }) => ({
        color: theme.palette.text.primary,
        "& .MuiTypography-root": {
          fontWeight: "500",
        },
        // size small 
        "& .MuiCheckbox-sizeSmall ~ .MuiTypography-root": {
          fontSize: "14px", // button-m
        },
        // checked  
        "& .MuiCheckbox-root.Mui-checked .MuiSvgIcon-root": {
            fill: theme.palette.primary.dark,
          },
       }),
      },
    },
    MuiFormHelperText:{
      styleOverrides: {
       root: ({ theme }) => ({
          marginLeft: "0px",
        }),
      },
    },
    MuiMobileStepper:{
      styleOverrides: {
       root: ({ theme }) => ({
        color: theme.palette.neutral.main,
        "&.Mui-disabled" : {
            color: theme.palette.neutral.main,
        },
       }),
       dot: ({ theme }) => ({
          height: theme.spacing(2),
          width: theme.spacing(2),
          backgroundColor: theme.palette.neutral.main,
        }),
        dotActive: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    }
  },
});

export default theme;
