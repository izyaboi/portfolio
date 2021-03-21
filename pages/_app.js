import { ThemeProvider } from 'tailwind-darkmode-toggle';
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
   </ThemeProvider>
  );
}

export default MyApp
