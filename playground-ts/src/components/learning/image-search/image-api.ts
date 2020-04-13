import axios from 'axios'

// can also add other key params
export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
})
