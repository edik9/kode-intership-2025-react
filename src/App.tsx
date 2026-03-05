import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Container } from "./components/UI/Container/Container"


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container>
        <BrowserRouter basename="/kode-intership-2025-react">
          <Routes>
            <Route path="/" element={< MainPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
