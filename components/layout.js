import Head from "next/head";
import styled from "styled-components";
import { useEffect } from "react";

import ThemeToggle from "./themeToggle";

export default function Layout({
  children,
  toggleTheme,
  darkTheme,
  rehydrateTheme,
}) {
  useEffect(() => {
    const cachedTheme = localStorage.getItem("darkTheme");
    console.log(cachedTheme);
    console.log(darkTheme);
    if (cachedTheme !== darkTheme.toString()) {
      rehydrateTheme();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        header
        <ThemeToggle toggleTheme={toggleTheme} darkTheme={darkTheme} />
      </Header>

      <Main>{children}</Main>

      <Footer>footer</Footer>
    </div>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
`;

const Main = styled.main`
  height: 100vh;
  width: 100%;
  margin-top: 50px;
`;

const Footer = styled.footer`
  height: 100px;
  width: 100%;
`;
