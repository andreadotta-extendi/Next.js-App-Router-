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
          light: '#D3D7FF', // 30% più chiaro
          main: '#6C7AFF', // Colore principale
          dark: '#5262FF', // 30% più scuro
        },
        secondary: {
          light: '#7248b8', // 20% più chiaro
          main: '#4C1D95',  // Colore principale
          dark: '#3a1571',  // 20% più scuro
          contrastText: '#fff', // Contrasto del testo (opzionale)
        },
        background: '#1C1D22', // Sostituisci con il colore di sfondo
        button: '#5B21B6', // Colore del bottone "Accedi"
        buttonDisabled: '#D1D5DB', // Colore del bottone disabilitato
      },
    },
  },
  plugins: [],
}

export default tailwindConfig;