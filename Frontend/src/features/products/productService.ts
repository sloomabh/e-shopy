import axios from "axios"

import { base_url } from "../../utils/baseUrl"
//import { ProductType } from "./productType.dt"

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`)

  return response.data
}

const productService = {
  getProducts,
}

export default productService
