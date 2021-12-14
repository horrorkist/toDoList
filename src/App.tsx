import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";
import SelectCategory from "./components/SelectCategory";

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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: whitesmoke;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Title>To Do List</Title>
        <SelectCategory></SelectCategory>
        <CreateToDo></CreateToDo>
        <ToDoList></ToDoList>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
