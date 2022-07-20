import axios from "axios";

import { Message } from "element-ui";

// 1.创建axios事例
const service = axios.create({
  baseURL: 'http://html.zhangjunbai.com',
  timeout: 30 * 1000,
  withCredentials:false,
});

service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  config.headers = { 'Content-Type': 'application/json' }
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
}, error => {
  Promise.reject(error)
});

service.interceptors.response.use(response => {
  return response
})

export default service