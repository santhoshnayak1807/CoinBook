import { Container } from 'App.css'
import { GlobalStyle } from 'App.styles'
import { LinksFooter, NavUnder } from 'components'
import Footer from 'components/Footer'
import NavBar  from 'components/NavBar/NavBar'
import { AllCoins, Coin, Portfolio } from 'pages'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'utils'

const App = () => {
  const { themeOn } = useSelector(state => state.config)
  const theme = themeOn ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      <Container>
        <NavBar />
        <NavUnder />
        <Routes>
          <Route path='/' element={<AllCoins /> } />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/coin/:coinId' element={<Coin />} />
        </Routes>
        <LinksFooter />
        <Footer />
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App