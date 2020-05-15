/* eslint-disable class-methods-use-this */
import * as history from 'history'
import _ from 'lodash'
import { DEBUG_SESSION_PARAM } from 'utils/devtools'

class HistoryService {
  getDebugSessionParam(location: history.Location) {
    const previousParams = new URLSearchParams(location.search)
    return previousParams.get(DEBUG_SESSION_PARAM)
  }

  getLocationWithDebugSession(
    to: history.LocationDescriptor,
    debugSession: string | null | undefined
  ) {
    let toLocationObject: history.LocationDescriptorObject
    if (typeof to === 'string') {
      const [pathname, search] = _.split(to, '?')
      toLocationObject = { pathname, search }
    } else {
      toLocationObject = { ...to }
    }
    const newParams = new URLSearchParams(toLocationObject.search)
    newParams.delete(DEBUG_SESSION_PARAM)
    if (debugSession) {
      newParams.append(DEBUG_SESSION_PARAM, debugSession)
    }
    return {
      ...toLocationObject,
      search: newParams.toString()
    }
  }
}

export default new HistoryService()
