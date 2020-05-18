import { LocationDescriptorObject } from 'history'
import historyService from 'services/history/history-service'
import { BASE_PATH } from '../data/constants'

export const getPath = (
  contextRoute: string,
  location: LocationDescriptorObject
) => `${historyService.getRootPath(BASE_PATH, location)}${contextRoute}`

export const getLocationPreservingSearch = (
  toContextLocation: LocationDescriptorObject,
  currentLocation: LocationDescriptorObject
): LocationDescriptorObject => {
  const toLocation: LocationDescriptorObject = { ...toContextLocation }
  toLocation.pathname = getPath(toContextLocation.pathname!, currentLocation)
  return historyService.getLocationPreservingSearch(toLocation, currentLocation)
}
