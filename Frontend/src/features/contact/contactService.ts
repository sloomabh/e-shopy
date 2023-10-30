import axios from "axios"
import { config } from "../../utils/axiosconfig"
import { base_url } from "../../utils/baseUrl"

const postQuery = async (contactDtata) => {
  const response = await axios.post(`${base_url}enquiry/`, { contactDtata })
  if (response.data) return response.data
}
/*
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_url}enquiry/${id}`, config)
  return response.data
}
const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiry/${id}`)
  return response.data
}
*/
const contactService = {
  postQuery,
}

export default contactService
