import { LocationDescriptorObject } from 'history'
import historyService from 'services/history/history-service'
import history from 'router/history'

export const ROOT_RESOURCE_PATH = '/examples/router'

export const routes = {
  home: `${ROOT_RESOURCE_PATH}`,
  private: `${ROOT_RESOURCE_PATH}/private`,
  list: `${ROOT_RESOURCE_PATH}/users`,
  details: `${ROOT_RESOURCE_PATH}/users/:id`,
  create: `${ROOT_RESOURCE_PATH}/users/create`,
  edit: `${ROOT_RESOURCE_PATH}/users/edit/:id`,
  delete: `${ROOT_RESOURCE_PATH}/users/delete/:id`
}

export type RouteIdParams = {
  id: string
}

export const getLocation = (pathname: string): LocationDescriptorObject =>
  historyService.getLocationPreservingSearch({ pathname }, history.location)

export const locations = {
  home: () => getLocation(`${ROOT_RESOURCE_PATH}`),
  private: () => getLocation(`${ROOT_RESOURCE_PATH}/private`),
  list: () => getLocation(`${ROOT_RESOURCE_PATH}/users`),
  details: (id: number) => getLocation(`${ROOT_RESOURCE_PATH}/users/${id}`),
  create: () => getLocation(`${ROOT_RESOURCE_PATH}/users/create`),
  edit: (id: number) => getLocation(`${ROOT_RESOURCE_PATH}/users/edit/${id}`),
  delete: (id: number) =>
    getLocation(`${ROOT_RESOURCE_PATH}/users/delete/${id}`)
}
