import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< MainPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
