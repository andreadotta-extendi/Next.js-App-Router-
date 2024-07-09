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
        primary: '#5B21B6', // Sostituisci con il colore viola principale
        secondary: {
          light: '#7248b8', // 20% più chiaro
          main: '#4C1D95',  // Colore principale
          dark: '#3a1571',  // 20% più scuro
          contrastText: '#fff', // Contrasto del testo (opzionale)
        },
        background: '#8B5CF6', // Sostituisci con il colore di sfondo
        button: '#5B21B6', // Colore del bottone "Accedi"
        buttonDisabled: '#D1D5DB', // Colore del bottone disabilitato
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;