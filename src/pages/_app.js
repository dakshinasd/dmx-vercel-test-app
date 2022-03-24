import Header from '../components/Header';
import { baseTheme, immensaTheme } from '../config/themes.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  if (process.browser) {
    const theme = immensaTheme;
    const root = document.documentElement;

    const colorObject = theme.configuration.colors;

    Object.keys(colorObject).forEach((colorKey) =>
      root.style.setProperty(colorKey, colorObject[colorKey])
    );
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
