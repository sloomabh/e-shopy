import axios from "axios"

import { base_url } from "../../utils/baseUrl"
import { config } from "../../utils/axiosconfig"
//import { ProductType } from "./productType.dt"

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`)
  if (response.data) return response.data
}

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`)
  if (response.data) return response.data
}

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config,
  )
  if (response.data) return response.data
}

const productService = {
  getProducts,
  getSingleProduct,
  addToWishlist,
}

export default productService
