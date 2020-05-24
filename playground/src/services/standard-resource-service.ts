/* eslint-disable no-useless-constructor */
import { AxiosInstance } from 'axios'

export default class StandardResourceService<T, ID> {
  constructor(private api: AxiosInstance, private resource: string) {
    //
  }

  resourcePath = () => `/${this.resource}`

  resourceItemPath = (id: ID) => `/${this.resource}/${id}`

  async list() {
    return this.api.get<T[]>(this.resourcePath())
  }

  async get(id: ID) {
    return this.api.get<T>(this.resourceItemPath(id))
  }

  async create(value: T) {
    return this.api.post<T>(this.resourcePath(), value)
  }

  async update(id: ID, value: T) {
    return this.api.put<T>(this.resourceItemPath(id), value)
  }

  async patchUpdate(id: ID, value: Partial<T>) {
    return this.api.patch<T>(this.resourceItemPath(id), value)
  }

  async delete(id: ID) {
    return this.api.delete<void>(this.resourceItemPath(id))
  }
}
