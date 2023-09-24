export interface CouponDefautType {
  _id: string
  name: string
  expiry: string
  discount: number
}

export interface CouponInput {
  name: string
  id: string
}
