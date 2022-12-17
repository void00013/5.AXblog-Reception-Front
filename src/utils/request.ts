import axios from 'axios'

const myReq = axios.create({
  baseURL: '/mock'
})

export {
  myReq
}
