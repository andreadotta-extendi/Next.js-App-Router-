/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  important: '#root',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#6C7AFF30', // 30% più chiaro
          main: '#6C7AFF', // Colore principale
          dark: '#5262FF', // 30% più scuro
        },
        secondary: {
          light: '#7248b8', // 20% più chiaro
          main: '#B3EEFF',  // Colore principale
          dark: '#8AE5FF',  // 20% più scuro
          contrastText: '#15151A', // Contrasto del testo (opzionale)
        },
        complementary: {
          light: '#FF826B',
          main: '#FF6043',
          dark: '#E95135',
        },
        text: {
          primary: '#E2E3E9',
          secondary: '#9597AC',
          disabled: '#515466 !important',
        },
        action: {
          divider: '#8C8D97',
          focus: '#393A47',
        },
        background: '#1C1D22', // Sostituisci con il colore di sfondo
        paper: '#15151A', // Colore superfici
        button: '#5B21B6', // Colore del bottone "Accedi"
        buttonDisabled: '#D1D5DB', // Colore del bottone disabilitato
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;