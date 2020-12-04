import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Layout from "../components/layout";
import { GlobalStyles, dark, light } from "../styles/global";

function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  };

  const rehydrateTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <Layout
        toggleTheme={toggleTheme}
        rehydrateTheme={rehydrateTheme}
        darkTheme={darkTheme}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
