import axios from 'axios'

const jwtToken = localStorage.getItem('jwtToken')

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

export default httpRequest
