/* eslint-disable no-useless-constructor */
import { AxiosInstance } from 'axios'

export default class StandardGenericResourceService {
  constructor(private api: AxiosInstance) {
    //
  }

  private resourcePath = (resource: string) => `/${resource}`

  private resourceItemPath = (resource: string, id: any) => `/${resource}/${id}`

  async list<T>(resource: string) {
    return this.api.get<T[]>(this.resourcePath(resource))
  }

  async get<T, ID>(resource: string, id: ID) {
    return this.api.get<T>(this.resourceItemPath(resource, id))
  }

  async create<T>(resource: string, value: T) {
    return this.api.post<T>(this.resourcePath(resource), value)
  }

  async update<T, ID>(resource: string, id: ID, value: T) {
    return this.api.put<T>(this.resourceItemPath(resource, id), value)
  }

  async patchUpdate<T, ID>(resource: string, id: ID, value: Partial<T>) {
    return this.api.patch<T>(this.resourceItemPath(resource, id), value)
  }

  async delete<ID>(resource: string, id: ID) {
    return this.api.delete<void>(this.resourceItemPath(resource, id))
  }
}
