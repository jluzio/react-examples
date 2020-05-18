export type Stream = {
  id: number
  title: string
  description: string
}

export type StreamCreateData = Pick<Stream, 'title' | 'description'>

export type StreamCreateResult = Pick<Stream, 'id'>
