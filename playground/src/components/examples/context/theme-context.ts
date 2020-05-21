import React from 'react'

export type Theme = {
  foreground: string
  background: string
}

export type ThemeData = {
  theme: Theme
  toggleTheme: () => void
}

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

export const ThemeContext = React.createContext<ThemeData>(
  // default value
  {
    theme: themes.dark,
    toggleTheme: () => {}
  }
)
ThemeContext.displayName = 'ThemeContext'
