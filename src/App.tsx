import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage"
import ThemeProvider  from "./context/ThemeProvider"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Container } from "./components/UI/Container/Container"
import { useTheme } from "./hooks/useTheme"

const ThemeApp = () => {
  const {theme} = useTheme()
  const currentTheme = theme === "light" ? lightTheme : darkTheme
  
  return(
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Container>
        <BrowserRouter basename="/kode-intership-2025-react">
          <Routes>
            <Route path="/" element={< MainPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </StyledThemeProvider>
  )
}

function App() {

  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  )
}

export default App
