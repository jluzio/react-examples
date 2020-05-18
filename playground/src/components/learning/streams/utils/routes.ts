import { LocationDescriptorObject } from 'history'
import contextLocationService from 'services/history/context-location-service'
import { BASE_PATH } from '../data/constants'

export const getPath = (
  contextRoute: string,
  location: LocationDescriptorObject
) => `${contextLocationService.getRootPath(BASE_PATH, location)}${contextRoute}`

export const getLocationPreservingSearch = (
  toContextLocation: LocationDescriptorObject,
  currentLocation: LocationDescriptorObject
): LocationDescriptorObject => {
  const toLocation: LocationDescriptorObject = { ...toContextLocation }
  toLocation.pathname = getPath(toContextLocation.pathname!, currentLocation)
  return contextLocationService.getLocationPreservingSearch(
    toLocation,
    currentLocation
  )
}
