export interface Post {
  id: string
  title: string
  body: string
  userId?: string
}

export interface Todo {
  id: string
  title: string
  completed: boolean
  userId?: string
}
