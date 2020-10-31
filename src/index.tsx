import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reportWebVitals, register } from "./core";

import configureStore from "./redux/store";
import { Card, Content, Grid, Title } from "./components";
import Numbers from "./components/button/numbers/Numbers.component";
import RestartButton from "./components/restart-button/RestartButton.component";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <RestartButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register();
