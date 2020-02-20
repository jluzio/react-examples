export interface ImageData {
  url: string
}
export type ImageResults = JsonPlaceholderPhotos

export interface ImageSearchFilter {
  searchText: string
}

export type JsonPlaceholderPhotos = JsonPlaceholderPhoto[]
export interface JsonPlaceholderPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
