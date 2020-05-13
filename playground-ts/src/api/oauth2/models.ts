export type UserProfile = {
  id: string
  email: string
  name: string
  imageUrl?: string
}

export type GoogleAuthVar = Omit<gapi.auth2.GoogleAuth, 'then'>
