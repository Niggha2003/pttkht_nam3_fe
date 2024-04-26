import axios from 'axios'
import Cookies from 'js-cookie'

const jwtToken = Cookies.get('jwt-token')

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options)
  return response.data
}

export const post = async (path, options = {}) => {
  const response = await httpRequest.post(path, options)
  return response.data
}

export default httpRequest
