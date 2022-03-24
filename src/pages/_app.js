import { useState, useEffect } from 'react';

import Header from '../components/Header';
import { baseTheme, immensaTheme } from '../config/themes.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (process.browser) {
      // simulating fetch of theme configuration from API
      (async () => {
        setLoading(true);
        try {
          const response = await fetch(
            'https://my-json-server.typicode.com/dakshinasd/fake-json-server/users'
          );
          const fetchedUsers = await response.json();
          setUsers(fetchedUsers);
        } catch (err) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();

      const theme = immensaTheme;
      const root = document.documentElement;

      const colorObject = theme.configuration.colors;

      Object.keys(colorObject).forEach((colorKey) =>
        root.style.setProperty(colorKey, colorObject[colorKey])
      );
    }
  }, []);

  if (loading) {
    return <div className="text-xl p-10 text-center">Loading....</div>;
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
