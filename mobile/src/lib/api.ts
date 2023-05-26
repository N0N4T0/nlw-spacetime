import axios from 'axios'
import { IPAdress } from '../config'

// localhost no android nao é enxergado pra fora do android
export const api = axios.create({
  baseURL: `http://${IPAdress}:3333`,
})
