import { Config } from 'tailwindcss/types/config';

export interface CustomExtendConfig {
  colors: {
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
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    }
    background: string;
    button: string;
    buttonDisabled: string;
  };
}

export interface CustomThemeConfig extends Config {
  theme: {
    extend: CustomExtendConfig;
  };
}