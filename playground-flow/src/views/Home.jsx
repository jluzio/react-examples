import React from 'react'
import { Link, Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h2>Home</h2>
      <Button
        color="primary"
        variant="contained"
        component={RouterLink}
        to="/examples"
      >
        Examples
      </Button>
    </div>
  )
}

export default Home
