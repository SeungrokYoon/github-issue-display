import axios from 'axios'

const BASE_URL = 'https://github.com/facebook/react/issues'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
  },
})
