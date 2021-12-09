import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./components/Coin";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms";
import Chart from "./components/Chart";
import Price from "./components/Price";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
	background-color: ${(props) => props.theme.bgColor};
}
`;

function App() {
  const isDark = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/coin-tracker" element={<Coins />}></Route>
          <Route path="/coin-tracker/:coinId/*" element={<Coin />}>
            <Route path="chart" element={<Chart></Chart>}></Route>
            <Route path="price" element={<Price></Price>}></Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
