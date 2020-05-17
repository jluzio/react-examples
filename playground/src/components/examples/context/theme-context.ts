import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

export const ThemeContext = React.createContext(
  // default value
  {
    theme: themes.dark,
    toggleTheme: () => {}
  }
)
ThemeContext.displayName = 'ThemeContext'
