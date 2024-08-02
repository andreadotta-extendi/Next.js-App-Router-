/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6C7AFF30', // 30% più chiaro
          main: '#6C7AFF', // Colore principale
          dark: '#5262FF', // 30% più scuro
        },
        secondary: {
          light: '#7248b8', // 20% più chiaro
          main: '#4C1D95',  // Colore principale
          dark: '#3a1571',  // 20% più scuro
          contrastText: '#15151A', // Contrasto del testo (opzionale)
        },
        text: {
          primary: '#E2E3E9',
          secondary: '#9597AC',
          disabled: '#515466 !important',
        },
        background: '#1C1D22', // Sostituisci con il colore di sfondo
        header: '#15151A', // Colore header
        button: '#5B21B6', // Colore del bottone "Accedi"
        buttonDisabled: '#D1D5DB', // Colore del bottone disabilitato
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;