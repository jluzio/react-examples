import React, { useState } from 'react'
import LoggingLifecycleMethods from './LoggingLifecycleMethods'

const LifecycleExample: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  return <LoggingLifecycleMethods counter={counter} setCounter={setCounter} />
}

export default LifecycleExample
