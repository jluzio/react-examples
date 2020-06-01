import React from 'react'
import {
  Card,
  Button,
  Link,
  CardHeader,
  CardActions,
  CardContent,
} from '@material-ui/core'
import { Link as RouterLink, Switch, Route } from 'react-router-dom'
import TodoListExample from './redux/TodoListExample'

const ExampleList: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Examples" />
      <CardContent>
        <Switch>
          <Route path="/examples/redux/todo" component={TodoListExample} />
        </Switch>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          component={RouterLink}
          to="/examples/redux/todo"
        >
          Todo
        </Button>
      </CardActions>
    </Card>
  )
}

export default ExampleList
