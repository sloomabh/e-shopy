export interface BlogDefautType {
  _id: string
  title: string
  description: string
  category: string
  numViews: number
  isLiked: boolean
  isDisliked: boolean
  author: string
  images: []
  createdAt: string
  updatedAt: string
}

export interface BlogInput {
  title: string
  id: string
}
