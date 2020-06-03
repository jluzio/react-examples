import React, { useEffect, useState } from 'react'
import { useRouteMatch, Prompt, Link, withRouter } from 'react-router-dom'
import _ from 'lodash'
import { Card, Button } from 'antd'
import UserDetails from './UserDetails'
import { RouteIdParams, locations } from './routes'
import {
  connectorDetails as connector,
  ReduxPropsDetails as ReduxProps
} from './redux'

type Props = ReduxProps

const UserDetailsById: React.FC<Props> = ({ user, fetchUser }: Props) => {
  const [promptOnLeave, setPromptOnLeave] = useState(false)
  const routeMatch = useRouteMatch<RouteIdParams>()
  const id = _.parseInt(routeMatch.params.id)

  useEffect(() => {
    if (!user || user.id !== id) {
      fetchUser(id)
    }
  }, [id, user, fetchUser])

  if (!user) {
    return null
  }

  return (
    <Card
      actions={[
        <Link to={locations.list()}>
          <Button>Back</Button>
        </Link>,
        <Button onClick={() => setPromptOnLeave(!promptOnLeave)}>
          Toggle Prompt [{promptOnLeave.toString()}]
        </Button>
      ]}
    >
      <Prompt
        when={promptOnLeave}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
      <UserDetails user={user} />
    </Card>
  )
}

export default withRouter(connector(UserDetailsById))
