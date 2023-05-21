import axios from 'axios'

// localhost no android nao é enxergado pra fora do android
export const api = axios.create({
  baseURL: 'http://192.168.1.2:3333',
})
