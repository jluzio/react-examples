import log from 'utils/log'
import { Middleware } from 'redux'

const logger: Middleware = store => next => action => {
  log.log('dispatching', action)
  const result = next(action)
  log.log('next state', store.getState())
  return result
}

export default logger
