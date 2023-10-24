export interface ProductType {
  _id: string
  title: string
  slug: string
  description: string
  price: string
  category: string
  brand: string
  quantity: string
  sold: boolean
  color: string
  totalrating: []
  ratings: []
  createdAt: string
  updatedAt: string
}

export interface ProductDefautState {
  _id: string
  title: string
  slug: string
  description: string
  price: string
  category: string
  brand: string
  quantity: string
  sold: boolean
  color: string
  totalrating: []
  ratings: []
  createdAt: string
  updatedAt: string
}
