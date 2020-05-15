export type Stream = {
  title: string
  description: string
}

export type StreamCreateData = Pick<Stream, 'title' | 'description'>
