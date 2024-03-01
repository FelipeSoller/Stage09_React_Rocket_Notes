import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://stage08-node-api-rocket-note.onrender.com'
})
