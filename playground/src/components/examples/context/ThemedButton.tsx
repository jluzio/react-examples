/* eslint-disable lines-between-class-members */
/* eslint-disable react/sort-comp */
/* eslint-disable react/static-property-placement */
import React from 'react'
import { ThemeContext } from './theme-context'

class ThemedButton extends React.Component {
  static contextType = ThemeContext
  context!: React.ContextType<typeof ThemeContext>

  render() {
    const { theme } = this.context
    return (
      <button
        type="button"
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        Submit
      </button>
    )
  }
}

export default ThemedButton
