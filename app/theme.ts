"use client";
import { Roboto } from "next/font/google";
import { SimplePaletteColorOptions, createTheme } from "@mui/material/styles";
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import postcss, { Root } from 'postcss';
import postcssJs from 'postcss-js';
import tailwindcss from 'tailwindcss';


declare module "@mui/material/styles" {

  interface Theme {
    customShadows: {default: string}
  }
  interface ThemeOptions{
    customShadows: {default: string}
  }
  interface Palette {
    complementary: SimplePaletteColorOptions;
    placeholder: SimplePaletteColorOptions;
    borders: SimplePaletteColorOptions;
    title: SimplePaletteColorOptions;
    paragraph: SimplePaletteColorOptions;
    overlay: SimplePaletteColorOptions & {opacity: number};
    gradient: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    complementary: SimplePaletteColorOptions;
    placeholder: SimplePaletteColorOptions;
    borders: SimplePaletteColorOptions;
    title: SimplePaletteColorOptions;
    paragraph: SimplePaletteColorOptions;
    overlay: SimplePaletteColorOptions & {opacity: number};
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

declare module '@mui/material/Typography' {
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
    subtitle2: false
    h6: false;
    inherit: false;
  }
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const tailwindProcessor = postcss([tailwindcss]);

const cssObjectParser = (obj: postcssJs.CssInJs): Root => {
  const root = new Root();

  // Aggiungi i nodi al root utilizzando l'oggetto CssInJs
  for (const [rule, declarations] of Object.entries(obj)) {
    const node = postcss.rule({ selector: rule });
    for (const [property, value] of Object.entries(declarations)) {
      node.append(postcss.decl({ prop: property, value: String(value) }));
    }
    root.append(node);
  }

  return root;
};

const getTailwindStyles = () => {
  const root = postcss.root();

  // Aggiungi le regole di Tailwind CSS al root
  root.append(postcss.comment({ text: '@tailwind base;' }));
  root.append(postcss.comment({ text: '@tailwind components;' }));
  root.append(postcss.comment({ text: '@tailwind utilities;' }));

  // Processa le regole di Tailwind CSS
  const result = tailwindProcessor.process(root, { from: undefined, parser: cssObjectParser }).sync();

  // Assicurati che il risultato sia un oggetto Root
  const resultRoot = result.root as Root | Document;
  if (resultRoot instanceof Root) {
    // Converti il risultato in un oggetto JavaScript utilizzabile
    return postcssJs.objectify(resultRoot);
  } else {
    throw new Error('Il risultato non è un oggetto Root');
  }
};


const tailwindStyles = getTailwindStyles();


const theme = createTheme({
  palette: {
    primary: {
      main: "#6910F2", // Colore primario
    },
    secondary: {
      main: "#191969", // Colore secondario
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
      main: "linear-gradient(90deg, #772FAC 0%, #5C00DE 100%)", // Gradient
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: tailwindStyles[".text-6xl"],
      fontWeight: 700,
      lineHeight: "1rem",
    },
    h2: {
      fontSize: "text-5xl",
      fontWeight: 700,
      lineHeight: "1rem",
    },
    h3: {
      fontSize: "text-4xl",
      fontWeight: 700,
      lineHeight: '2.25rem',
    },
    h4: {
      fontSize: "text-3xl",
      fontWeight: 700,
      lineHeight: '2.25rem',
    },
    h5: {
      fontSize: "text-2xl",
      fontWeight: 700,
      lineHeight: '2rem',
    },
    "title-cta": {
      fontSize: "text-base",
      fontWeight: 600,
      lineHeight: '1.5rem',
    },
    'paragraph-big':{
      fontSize: "text-base",
      fontWeight: 500,
      lineHeight: '1.5rem',
    },
    "title-small": {
      fontSize: "text-sm",
      fontWeight: 600,
      lineHeight: '1.25rem',
    },
    placeholder: {
      fontSize: "text-sm",
      fontWeight: 500,
      lineHeight: '1.25rem',
    },
    details: {
      fontSize: "text-xs",
      fontWeight: 600,
      lineHeight: '1rem',
    },
    "paragraph-small": {
      fontSize: "text-sm",
      fontWeight: 500,
      lineHeight: '1.25rem',
    },
  },
  customShadows: {
    default: "0px 4px 20px rgba(0, 0, 0, 0.5)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.5rem",
          boxShadow: theme.customShadows.default,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
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
  },
});

export default theme;
