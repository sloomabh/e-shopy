export interface UserInput {
  email: string
  password: string
}

export interface UserDefautType {
  _id: string
  firstname: string
  lastname: string
  email: string
  mobile: string
  password: string
  role: string
  isBlocked: boolean
  cart: []
  wishlist: []
  createdAt: Date
  updatedAt: Date
  refreshToken: string
}

interface PaymentIntent {
  id: string
  method: string
  amount: number
  status: string
  created: Date
  currency: string
}
export interface OrdersDefautType {
  _id: string
  orderStatus: string
  orderby: UserDefautType
  paymentIntent: PaymentIntent
  createdAt: string
  updatedAt: string
  refreshToken: string
  products: []
}
