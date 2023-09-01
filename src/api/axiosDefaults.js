import axios from 'axios'

axios.defaults.baseURL = 'https://fossils-and-rocks-46e5722264c9.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create()
export const axiosRes = axios.create()