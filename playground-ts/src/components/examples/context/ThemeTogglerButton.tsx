/* eslint-disable */
import React from 'react'
import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {themeData => (
        <button
          onClick={themeData.toggleTheme}
          style={{backgroundColor: themeData.theme.background, color: themeData.theme.foreground}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;