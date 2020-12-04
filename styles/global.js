import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    display: flex;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
  }
  `;

export const light = {
  bg: "white",
  fg: "black",
};

export const dark = {
  bg: "black",
  fg: "white",
};
