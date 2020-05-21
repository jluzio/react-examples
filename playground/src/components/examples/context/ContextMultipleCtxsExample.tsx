/* eslint-disable react/no-unused-state */
import React from 'react'
import { Card } from 'antd'
import { UserProfile } from 'models/core'
import { ThemeContext, themes, ThemeData } from './theme-context'
import ThemedButton from './ThemedButton'
import ThemeTogglerButton from './ThemeTogglerButton'
import { UserContext } from './user-context'
import ThemedUserCard from './ThemedUserCard'

interface Props {}
interface State {
  userData: UserProfile
  themeData: ThemeData
}

const alwaysDarkThemeData: ThemeData = {
  theme: themes.dark,
  toggleTheme: () => {}
}

const sampleUserProfile: UserProfile = {
  id: '99',
  email: 'johndoe@notexists.org',
  name: 'John Doe',
  imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
}

class ContextExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userData: sampleUserProfile,
      themeData: { theme: themes.dark, toggleTheme: this.toggleTheme }
    }
  }

  toggleTheme = () => {
    const { themeData } = this.state
    const newThemeData: ThemeData = {
      ...themeData,
      theme: themeData.theme === themes.dark ? themes.light : themes.dark
    }
    this.setState({
      themeData: newThemeData
    })
  }

  render() {
    const { userData, themeData } = this.state
    return (
      <Card title="Context Example">
        <UserContext.Provider value={userData}>
          <ThemeContext.Provider value={themeData}>
            <ThemedButton />
            <ThemeTogglerButton />
            <ThemedUserCard />
          </ThemeContext.Provider>
          <ThemeContext.Provider value={alwaysDarkThemeData}>
            <label>Always dark</label>
            <ThemedButton />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Card>
    )
  }
}

export default ContextExample
