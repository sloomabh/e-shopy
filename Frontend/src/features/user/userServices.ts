import axios from "axios"
import { base_url } from "../../utils/baseUrl"
import { config } from "../../utils/axiosconfig"

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData)
  return response.data
}

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData)
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data))
  }
  return response.data
}

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config)
  if (response.data) return response.data
}

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config)
  if (response.data) return response.data
}

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config)
  if (response.data) return response.data
}

const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
}

export default authService
