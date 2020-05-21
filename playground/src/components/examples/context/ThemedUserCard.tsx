/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card, Avatar } from 'antd'
import { ThemeContext } from './theme-context'
import { UserContext } from './user-context'

class ThemedUserCard extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {user =>
          user && (
            <ThemeContext.Consumer>
              {themeData => (
                <Card style={{ backgroundColor: themeData.theme.background }}>
                  <Card.Meta
                    title={user.name}
                    avatar={<Avatar src={user.imageUrl} />}
                    description={user.email}
                  />
                </Card>
              )}
            </ThemeContext.Consumer>
          )
        }
      </UserContext.Consumer>
    )
  }
}

export default ThemedUserCard
