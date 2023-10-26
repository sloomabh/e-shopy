import axios from "axios"

import { base_url } from "../../utils/baseUrl"
import { config } from "../../utils/axiosconfig"
//import { ProductType } from "./productType.dt"

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`)
  return response.data
}

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config,
  )
  return response.data
}

const productService = {
  getProducts,
  addToWishlist,
}

export default productService
