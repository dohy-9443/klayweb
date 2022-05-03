import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --red: #ff0000;
    --orange: #fca400;
    --yellow: #ffff0f;
    --green: #00ff00;
    --blue: #0000ff;
    --navy: #000080;
    --purple: #cd55ff;
  }

  body {
    background:#000;
    padding: 10px;
    /* font-family: '어쩌구'; */
  }

  
`;

export default GlobalStyle;
