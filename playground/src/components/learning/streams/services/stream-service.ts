import localResourceApi from 'api/local/local-resource-api'
import { Stream } from '../data/models'

export class StreamService {
  private api = localResourceApi

  private resource = 'streams'

  list() {
    return this.api.get<Stream[]>(this.resource)
  }

  get(id: number) {
    return this.api.get<Stream>(`${this.resource}/${id}`)
  }

  create(data: Stream) {
    return this.api.post<Stream>(`${this.resource}`, data)
  }

  update(id: number, data: Stream) {
    return this.api.put<Stream>(`${this.resource}/${id}`, data)
  }

  patchUpdate(id: number, data: Partial<Stream>) {
    return this.api.patch<Stream>(`${this.resource}/${id}`, data)
  }

  delete(id: number) {
    return this.api.delete<void>(`${this.resource}/${id}`)
  }
}

export default new StreamService()
