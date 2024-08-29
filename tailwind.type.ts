import { Config } from "tailwindcss/types/config";

export interface CustomExtendConfig {
  colors: {
    error: any;
    header: string;
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    complementary: {
      light: string;
      main: string;
      dark: string;
    };
    eror: {
      light: string;
      main: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    action: {
      divider: string;
      focus: string;
    };
    background: string;
    paper: string;
    button: string;
    buttonDisabled: string;
  };
}

export interface CustomThemeConfig extends Config {
  theme: {
    extend: CustomExtendConfig;
  };
}
