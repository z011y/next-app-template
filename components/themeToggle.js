import styled from "styled-components";
import { useState, useContext } from "react";

export default function ThemeToggle({ toggleTheme, darkTheme }) {
  return (
    <div onClick={toggleTheme}>
      {darkTheme ? <div>dark</div> : <div>light</div>}
    </div>
  );
}
