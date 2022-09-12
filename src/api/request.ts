import axios from "axios"
import { ElLoading, ElMessage } from 'element-plus'
import { useUserStore } from "@/store"

export const instance = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:80/" : ""
})

instance.interceptors.request.use(config => {
  ElLoading.service()
  const userStore = useUserStore()
  // config.headers ? config.headers['Authorization'] = userStore.userInfo?.token ?? "" : ""
  config.headers ? config.headers['Authorization'] = localStorage.getItem('token') ?? "" : ""
  return config
}, e => {
  ElLoading.service().close()
  ElMessage.error("请求失败~")
  return e
})

instance.interceptors.response.use(response => {
  ElLoading.service().close()
  return response
}, (e) => {
  ElLoading.service().close()
  ElMessage.error("请求失败~")
  return e
})
