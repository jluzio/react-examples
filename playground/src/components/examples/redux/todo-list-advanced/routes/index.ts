import { LocationDescriptorObject } from 'history'
import historyService from 'services/history/history-service'
import history from 'router/history'

export const ROOT_RESOURCE_PATH = '/examples/todos'

export const routes = {
  list: `${ROOT_RESOURCE_PATH}`,
  details: `${ROOT_RESOURCE_PATH}/:id`,
  create: `${ROOT_RESOURCE_PATH}/create`,
  edit: `${ROOT_RESOURCE_PATH}/edit/:id`,
  delete: `${ROOT_RESOURCE_PATH}/delete/:id`
}

export type RouteIdParams = {
  id: string
}

const getLocation = (pathname: string): LocationDescriptorObject =>
  historyService.getLocationPreservingSearch({ pathname }, history.location)

export const locations = {
  list: () => getLocation(`${ROOT_RESOURCE_PATH}`),
  details: (id: string) => getLocation(`${ROOT_RESOURCE_PATH}/${id}`),
  create: () => getLocation(`${ROOT_RESOURCE_PATH}/create`),
  edit: (id: string) => getLocation(`${ROOT_RESOURCE_PATH}/edit/${id}`),
  delete: (id: string) => getLocation(`${ROOT_RESOURCE_PATH}/delete/${id}`)
}
