import axios from "axios"

import { base_url } from "../../utils/baseUrl"
import { config } from "../../utils/axiosconfig"
//import { ProductType } from "./productType.dt"

const getProducts = async (data) => {
  console.log(data)
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tag=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `minPrice=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `maxPrice=${data?.maxPrice}&&` : ""}`,
  )
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

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config)
  if (response.data) return response.data
}

const productService = {
  getProducts,
  getSingleProduct,
  addToWishlist,
  rateProduct,
}

export default productService
