import React from 'react'
import { useLocation } from 'react-router-dom'

const PrivatePage: React.FC = () => {
  const location = useLocation()

  return <p>Private Page: {JSON.stringify(location.state)}</p>
}

export default PrivatePage
