import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --color1: #f0f9ff;
  --color2:#a4c8eb;
  --color3:#5793cf;
  --textColor1:#000;
  --textColor2:#006EA5;
  --textColor3:#edf6ff;
  --icon-position:right;
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
a{
  color:var(--textColor2);
}
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size:16px;
    background-color:var(--color1);
    color:var(--textColor1);
    transition:all 0.4s;
  }
  h1,h2,h3,h4,h5,h6{
    padding:10px 0;
    text-align:center;
  }
  main{
    min-height:calc(100vh - 200px);
  }
`;

export default GlobalStyle;
