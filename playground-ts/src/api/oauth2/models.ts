export type UserProfile = {
  name?: string
  email?: string
  imageUrl?: string
}

export type GoogleAuthVar = Omit<gapi.auth2.GoogleAuth, 'then'>
