import { LocationDescriptorObject } from 'history'

class ContextLocationService {
  getRootPath = (basePath: string, location: LocationDescriptorObject) => {
    const pathname = location.pathname!
    const contextIndexOf = pathname.indexOf(basePath)
    return contextIndexOf >= 0
      ? pathname.substring(0, contextIndexOf + basePath.length)
      : basePath
  }

  getLocationPreservingSearch = (
    toLocation: LocationDescriptorObject,
    currentLocation: LocationDescriptorObject
  ): LocationDescriptorObject => {
    const toLocationParams = new URLSearchParams(toLocation.search)
    const currentLocationParams = new URLSearchParams(currentLocation.search)
    currentLocationParams.forEach((value, key) => {
      if (!toLocationParams.has(key)) {
        toLocationParams.append(key, value)
      }
    })
    return { ...toLocation, search: toLocationParams.toString() }
  }
}

export default new ContextLocationService()
