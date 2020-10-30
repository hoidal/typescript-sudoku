import { format } from 'path'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './core/reportWebVitals'

import { Card, Content, Grid, Title } from './components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
