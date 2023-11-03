import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
})

export default api
