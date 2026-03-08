import { createGlobalStyle } from "styled-components";
import { colors, typography } from "./variables";

export const GlobalStyles = createGlobalStyle `
html, body {
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  transition: background-color 0.8s ease;
}

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    transition: background-color 0.8s ease;
  }
*{padding: 0;margin: 0;border: 0;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 16px;
-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
font-family: ${typography.fontFamily.primary}; color: ${colors.textPrimary}; background-color: ${colors.bgPrimary};}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none; color: inherit;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top; max-width: 100%; height: auto;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
* {
    transition: background-color 0.5s ease, 
                color 0.5s ease, 
                border-color 0.5s ease,
                fill 0.5s ease,
                stroke 0.5s ease;
  }
  .no-transition,
  .no-transition * {
    transition: none !important;
  }
`