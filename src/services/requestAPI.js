import axios from "axios"
import {BASE_URL,TIMEOUT} from "./config"

// 创建axios实例
const myAxios = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

// 拦截请求
myAxios.interceptors.request.use(config => {
  // 自定义拦截成功后的操作 xxx

  // console.log("请求拦截成功")
  // console.log("请求参数：",config)
  return config
},err => {
  // 自定义错误操作
})

// 拦截响应
myAxios.interceptors.response.use(res => {
  console.log("请求结果:",res.data)
  return res.data
},err => {
  if (err & err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误")
        break;
      case 500:
        console.log("服务器错误")
        break;
      default:
        console.log("xxx错误")
    }
  }
})

export default myAxios