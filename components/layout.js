import Head from "next/head";

import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>header</Header>

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
  background-color: white;
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
