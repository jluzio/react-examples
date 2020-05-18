import localResourceApi from 'api/local/local-resource-api'
import { Stream, StreamCreateData, StreamCreateResult } from '../models'

export class StreamService {
  private api = localResourceApi

  private resource = 'streams'

  list() {
    return this.api.get<Stream[]>(this.resource)
  }

  get(id: string) {
    return this.api.get<Stream>(`${this.resource}/${id}`)
  }

  create(data: StreamCreateData) {
    return this.api.post<StreamCreateResult>(`${this.resource}`, data)
  }

  update(id: string, data: Stream) {
    return this.api.put<Stream>(`${this.resource}/${id}`, data)
  }

  delete(id: string) {
    return this.api.delete<void>(`${this.resource}/${id}`)
  }
}

export default new StreamService()
