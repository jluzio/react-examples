/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import localResourceApi from 'api/local/local-resource-api'

export default class LocalResourceService<T> {
  api = localResourceApi

  constructor(private resource: string) {}

  list() {
    return this.api.get<T[]>(this.resource)
  }

  get(id: string) {
    return this.api.get<T>(`${this.resource}/${id}`)
  }

  create(data: T) {
    return this.api.post<T>(`${this.resource}`, data)
  }

  update(id: string, data: T) {
    return this.api.put<T>(`${this.resource}/${id}`, data)
  }

  delete(id: string) {
    return this.api.delete<T>(`${this.resource}/${id}`)
  }
}
