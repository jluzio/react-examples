import { Stream } from '../data/models'

export class StreamPlayerService {
  private streamId = (id: number) => `stream-${id}`

  private url = (id: number) =>
    `http://localhost:8000/live/${this.streamId(id)}.flv`

  streamUrl(stream: Stream) {
    return this.url(stream.id)
  }
}

export default new StreamPlayerService()
