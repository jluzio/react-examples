export type Stream = {
  id: number
  title: string
  description: string
  userId: string
}

export type StreamEditData = Partial<Stream>
