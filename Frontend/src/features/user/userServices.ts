import axios from "axios"
import { base_url } from "../../utils/baseUrl"

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData)
  return response.data
}

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData)
  /* if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }*/
  return response.data
}
/*
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config)

  return response.data
}

const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
    "",
    config,
  )

  return response.data
}
*/
const authService = {
  register,
  login,
}

export default authService
