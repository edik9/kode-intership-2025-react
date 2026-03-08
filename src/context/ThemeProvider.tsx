import React, { useEffect, useState } from 'react'
import { ThemeContext, type ThemeType } from './ThemeContext'


const ThemeProvider: React.FC<{children : React.ReactNode}> = ({children}) => {
  const getSystemTheme = (): ThemeType => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('theme') as ThemeType
    return saved || getSystemTheme()
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    document.body.style.backgroundColor = 
      theme === 'light' ? "#ffffff" : '#050510'
    document.body.style.transition = 'background-color 0.9s ease'
    
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider

