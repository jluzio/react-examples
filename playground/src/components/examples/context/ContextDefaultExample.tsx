/* eslint-disable react/no-unused-state */
import React from 'react'
import { Card } from 'antd'
import { ThemeContext, themes } from './theme-context'
import ThemedButton from './ThemedButton'
import ThemeTogglerButton from './ThemeTogglerButton'

interface Props {}
interface State {
  theme: any
  toggleTheme: () => void
}

class ContextExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    const { theme } = this.state
    this.setState({
      theme: theme === themes.dark ? themes.light : themes.dark
    })
  }

  render() {
    return (
      <Card title="Context Example">
        <ThemeContext.Provider value={this.state}>
          <ThemedButton />
          <ThemeTogglerButton />
        </ThemeContext.Provider>
      </Card>
    )
  }
}

export default ContextExample
