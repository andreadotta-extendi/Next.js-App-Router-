import { Config } from 'tailwindcss/types/config';

export interface CustomExtendConfig {
  colors: {
    primary: string;
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
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