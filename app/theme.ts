"use client";
import { Work_Sans } from "next/font/google";
import {
  SimplePaletteColorOptions,
  createTheme,
  Theme,
} from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import taiwindConfig from "../tailwind.config";
import { CustomExtendConfig } from "@/tailwind.type";
import { Height } from "@mui/icons-material";
declare module "@mui/material/styles" {
  interface TypeAction {
    divider?: string;
  }
}

const tc: any = taiwindConfig;
const extendConfig: CustomExtendConfig = tc.theme?.extend as CustomExtendConfig;

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
    "mac-sans-h2": TypographyStyleOptions;
    h3: TypographyStyleOptions;
    "mac-sans-h3": TypographyStyleOptions;
    h4: TypographyStyleOptions;
    "mac-sans-h4": TypographyStyleOptions;
    h5: TypographyStyleOptions;
    "mac-sans-h5": TypographyStyleOptions;
    s1: TypographyStyleOptions;
    s2: TypographyStyleOptions;
    "body-500": TypographyStyleOptions;
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
    "caption-small": TypographyStyleOptions;
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
    "mac-sans-h2": TypographyStyleOptions;
    h3: TypographyStyleOptions;
    "mac-sans-h3": TypographyStyleOptions;
    h4: TypographyStyleOptions;
    "mac-sans-h4": TypographyStyleOptions;
    h5: TypographyStyleOptions;
    "mac-sans-h5": TypographyStyleOptions;
    s1: TypographyStyleOptions;
    s2: TypographyStyleOptions;
    "body-500": TypographyStyleOptions;
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
    "caption-small": TypographyStyleOptions;
    "button-xl": TypographyStyleOptions;
    "button-l": TypographyStyleOptions;
    "button-m": TypographyStyleOptions;
    "button-s": TypographyStyleOptions;
    placeholder: TypographyStyleOptions;
    details: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    "mac-sans-h2": true;
    h3: true;
    "mac-sans-h3": true;
    h4: true;
    "mac-sans-h4": true;
    h5: true;
    "mac-sans-h5": true;
    s1: true;
    s2: true;
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
    "caption-small": true;
    "button-xl": true;
    "button-l": true;
    "button-m": true;
    "button-s": true;
    placeholder: true;
    details: true;
  }
}

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    success: {
      light: extendConfig.colors?.success.light,
      main: extendConfig.colors?.success.main,
      dark: extendConfig.colors?.success.dark,
    },
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
    neutral: {
      main: "#54566870",
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
    fontFamily: `${workSans.style.fontFamily}, sans-serif`,
    h1: {
      fontFamily: "'Mac Sans', sans-serif",
      fontSize: "3rem", // 48px
      fontWeight: 700,
      lineHeight: "58px",
      "@media (max-width:640px)": {
        fontSize: "2.4rem", // 38.4px
        lineHeight: "120%",
      },
    },
    h2: {
      fontSize: "2.5rem", // 40px
      fontWeight: 600,
      lineHeight: "110%",
      "@media (max-width:640px)": {
        fontSize: "2rem", // 32px
        lineHeight: "120%",
      },
    },
    "mac-sans-h2": {
      fontSize: "2.5rem", // 40px
      fontWight: 700,
      lineHeight: "48px",
      "@media (max-width:640px)": {
        fontSize: "2rem", // 32px
        lineHeight: "120%",
      },
    },
    h3: {
      fontSize: "2rem", // 32px
      fontWeight: 600,
      lineHeight: "38px",
      "@media (max-width:640px)": {
        fontSize: "1.6rem", // 25.6px
        lineHeight: "120%",
      },
    },
    "mac-sans-h3": {
      fontSize: "2rem", // 32px
      fontWight: 700,
      lineHeight: "38px",
      "@media (max-width:640px)": {
        fontSize: "1.6rem", // 25.6px
        lineHeight: "120%",
      },
    },
    h4: {
      fontSize: "1.75rem", // 28px
      fontWeight: 600,
      lineHeight: "34px",
      "@media (max-width:640px)": {
        fontSize: "1.4rem", // 22.4px
        lineHeight: "120%",
      },
    },
    "mac-sans-h4": {
      fontSize: "1.75rem", // 28px
      fontWight: 700,
      lineHeight: "34px",
      "@media (max-width:640px)": {
        fontSize: "1.4rem", // 22.4px
        lineHeight: "120%",
      },
    },
    h5: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
      lineHeight: "28px",
      "@media (max-width:640px)": {
        fontSize: "1.2rem", // 19.2px
        lineHeight: "120%",
      },
    },
    "mac-sans-h5": {
      fontSize: "1.5rem", // 24px
      fontWight: 700,
      lineHeight: "28px",
      "@media (max-width:640px)": {
        fontSize: "1.2rem", // 19.2px
        lineHeight: "120%",
      },
    },
    s1: {
      fontSize: "1.125rem", // 18px
      fontWeight: 600,
      lineHeight: "28px",
      "@media (max-width:640px)": {
        fontSize: "1.0625rem", // 17px
        lineHeight: "120%",
      },
    },
    s2: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: "24px",
    },
    "body-500": {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: "24px",
    },
    "body-400": {
      fontSize: "1rem", // 16px
      fontWeight: 400,
      lineHeight: "24px",
    },
    "body-small-500": {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: "20px",
    },
    "body-small-400": {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: "20px",
    },
    "caption-500": {
      fontSize: "0.75rem", // 12px
      fontWeight: 500,
      lineHeight: "16px",
    },
    "caption-400": {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
      lineHeight: "16px",
    },
    "caption-small-500": {
      fontSize: "0.625rem", // 10px
      fontWeight: 400,
      lineHeight: "14px",
    },
    "button-xl": {
      fontSize: "1.125rem", // 18px
      fontWeight: 600,
      lineHeight: "24px",
    },
    "button-l": {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: "20px",
    },
    "button-m": {
      fontSize: "0.875rem", // 14px
      fontWeight: 600,
      lineHeight: "16px",
    },
    "button-s": {
      fontSize: "0.75rem", // 12px
      fontWeight: 600,
      lineHeight: "16px",
    },
    "title-cta": {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: "150%",
    },
    "paragraph-big": {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: "150%",
    },
    "title-small": {
      fontSize: "0.875rem", // 14px
      fontWeight: 600,
      lineHeight: "140%",
    },
    placeholder: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      lineHeight: "140%",
    },
    details: {
      fontSize: "0.75rem", // 12px
      fontWeight: 600,
      lineHeight: "130%",
    },
    "paragraph-small": {
      fontSize: "0.75rem", // 12px
      fontWeight: 500,
      lineHeight: "130%",
    },
    "caption-small": {
      fontSize: "0.625rem", // 10px
      fontWeight: 400,
      lineHeight: "120%",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          "&.MuiButton-containedPrimary": {
            background: theme.palette.gradient.main,
            color: theme.palette.text.primary,
            boxShadow: "0 0 0 5px #6C7AFF25",
          },

          "&.MuiButton-containedSecondary": {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },

          "&.MuiButton-containedPrimary:hover": {
            background: theme.palette.primary.dark,
          },

          "&.MuiButton-containedSecondary:hover": {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
          },

          "&.MuiButton-text": {
            color: theme.palette.primary.dark,
          },

          // disabled
          "&.MuiButton-contained.Mui-disabled": {
            background: theme.palette.text.disabled,
            color: theme.palette.secondary.contrastText,
            boxShadow: "none",
          },

          "&.MuiButton-outlined.Mui-disabled": {
            background: "transparent !important",
            color: theme.palette.text.disabled,
            border: `1px solid ${theme.palette.text.disabled}`,
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
          "&.button-icon-contained": {
            width: "44px",
            height: "44px",
            borderRadius: `${theme.spacing(1)}`,
          },
          "&.button-icon-contained.button-icon-primary": {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: "0 0 0 5px #6C7AFF25",
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
        labelMedium: ({ theme }) => ({
          padding: `3px ${theme.spacing(0.5)}`,
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

          "&.Mui-error": {
            color: theme.palette.error.main,
          },
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
          backgroundColor: theme.palette.paper.main,
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
    MuiAccordionSummary: {
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
          backgroundColor: theme.palette.paper.main,
          borderRadius: "0px",
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.neutral.main}`,
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
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: theme.spacing(5),
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
          backgroundColor: theme.palette.paper.main,
          borderRadius: "0.5rem",
          boxShadow: theme.customShadows.default,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          padding: theme.spacing(3),
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.paper.main,
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          borderTop: `1px solid ${theme.palette.neutral.main}`,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          color: theme.palette.text.primary,

          // Size Small
          "& .MuiInputBase-inputSizeSmall": {
            padding: ` ${theme.spacing(1.5)} ${theme.spacing(2)}`,
            fontSize: "12px !important",
          },

          // Focused
          "& .Mui-focused .MuiOutlinedInput-root": {
            color: theme.palette.text.primary,
            backgroundColor: "#393A47", // Action focus
          },
          "& .Mui-focused .MuiInputLabel-root": {
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(0.5),
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6C7AFF !important", // primary main
          },
          // Nascondi il notchedOutline
          "& .MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.text.secondary,
            },
          "& .MuiOutlinedInput-notchedOutline legend": {
            display: "none !important",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#8C8D97 !important", // Action Divider
            top: "0",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #1C1D22 inset !important", // Sfondo specifico
            WebkitTextFillColor: "#fff !important", // Colore del testo
            caretColor: "#fff !important",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 100px #1C1D22 inset !important",
            WebkitTextFillColor: "#fff !important",
            caretColor: "#fff !important",
          },
          '& input[type="password"]:-webkit-autofill': {
            WebkitBoxShadow: "0 0 0 100px #1C1D22 inset !important", // Background color fix for password field
            WebkitTextFillColor: "#fff !important", // Text color inside autofill
            caretColor: "#fff !important",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #1C1D22 inset !important", // Sfondo specifico
            WebkitTextFillColor: "#fff !important", // Colore del testo
            caretColor: "#fff !important",
          },

          "&.MuiInputBase-sizeSmall .MuiInputBase-input": {
            padding: `11px ${theme.spacing(2)}`,
            fontSize: "10px !important",
          },

          "&.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.action.divider,
          },

          // Error
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: `${theme.palette.error.main} !important`,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          // Input
          "& .MuiInputBase-input": {
            padding: theme.spacing(2),
            fontSize: "14px",
            border: "none",
            borderRadius: "0px !important",
          },
          "& .MuiInputBase-formControl": {
            color: theme.palette.text.primary,
            border: "1px inset #8C8D97", // Action Divider
            borderRadius: theme.spacing(1),
          },

          "& .MuiInputBase-formControl ::-webkit-input-placeholder": {
            color: theme.palette.text.secondary,
            opacity: "1 !important",
          },

          // Variant Outlined
          "& .MuiOutlinedInput-root": {
            color: theme.palette.text.primary,
            border: "none",
            backgroundColor: "transparent !important",
          },

          "& .MuiOutlinedInput-root:hover": {
            boxShadow: `0px 0px 0px 0.5px ${theme.palette.divider}`,
          },

          // Label
          "& .MuiInputLabel-root": {
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
          "& .Mui-focused.MuiOutlinedInput-root": {
            color: theme.palette.text.primary, // text primary
            backgroundColor: "#393A47 !important", // Action focus
          },
          "& .Mui-focused.MuiOutlinedInput-root": {
            color: theme.palette.text.primary, // text primary
            backgroundColor: "#393A47 !important", // Action focus
          },
          "& .Mui-focused .MuiInputLabel-root": {
            color: (theme.palette.text.primary, "!important"),
            marginBottom: theme.spacing(0.5),
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme.palette.primary.main, "!important"),
            top: "0",
          },

          // hide notchedOutline
          "& .MuiOutlinedInput-notchedOutline legend": {
            display: "none !important",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8C8D97", // Action Divider
            top: "0",
          },

          // adornment color
          "& .MuiIconButton-root": {
            color: theme.palette.text.secondary,
            padding: "8px 10px 8px 4px",
          },

          // creative checkbox
          "&.creative-checkbox input": {
            position: "absolute",
            display: "none",
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
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: "0px",
        }),
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "0px",
          color: theme.palette.neutral.main,
          "&.Mui-disabled": {
            color: theme.palette.neutral.main,
          },
        }),
        dot: ({ theme }) => ({
          height: theme.spacing(2),
          width: theme.spacing(2),
          backgroundColor: theme.palette.neutral.main,
          margin: `0 ${theme.spacing(1 / 2)}`,
        }),
        dotActive: ({ theme }) => ({
          backgroundColor: theme.palette.primary.dark,
        }),
      },
    },

    MuiStep: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.down("sm")]: {
            // Applies styles only for mobile devices
            paddingLeft: "4px !important",
            paddingRight: "4px !important",

            "& .QontoStepIcon-circle": {
              height: "14px !important",
              width: "40px !important",
            },
          },
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: theme.spacing(2),
          borderRadius: theme.spacing(2),
          backgroundColor: theme.palette.neutral.main,
        }),
        bar: ({ theme }) => ({
          borderRadius: theme.spacing(2),
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.action.divider,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1),

          "&.MuiAlert-colorError": {
            backgroundColor: "#B91C1C20",
            border: "1px solid #B91C1C20",
            color: "#ff7c7c",
          },
        }),
      },
    },
  },
});

export default theme;
