import { LoginForm, OPPwdModel } from '@/model/user'
import { UploadItemModel } from '@/model/todo_item'
import { instance } from './request'

export const apiLogin = (loginform: LoginForm) => {
  return new Promise((resolve, reject) => {
    instance.post("api/login", loginform).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiRegister = (loginform: LoginForm) => {
  return new Promise((resolve, reject) => {
    instance.post("api/register", loginform).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiAddToDoItem = (data: UploadItemModel) => {
  return new Promise((resolve, reject) => {
    instance.postForm("api/todo", data).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiDelToDoItem = (tid: number) => {
  return new Promise((resolve, reject) => {
    instance.delete(`api/todo/${tid}`).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiUpdateToDoItem = (tid: number, data: UploadItemModel) => {
  return new Promise((resolve, reject) => {
    instance.postForm(`api/todo/${tid}`, data).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiGetAllToDoItems = () => {
  return new Promise((resolve, reject) => {
    instance.get(`uuuuuuuuu/item`).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiDelUser = (id: number) => {
  return new Promise((resolve, reject) => {
    instance.delete(`uuuuuuuuu/${id}`).then(res => resolve(res.data)).catch(e => reject(e))
  })
}

export const apiUpdateUser = (id: number, data: OPPwdModel) => {
  return new Promise((resolve, reject) => {
    instance.post(`uuuuuuuuu/${id}`, data).then(res => resolve(res.data)).catch(e => reject(e))
  })
}


export const apiGetAllUsers = () => {
  return new Promise((resolve, reject) => {
    instance.get("uuuuuuuuu").then(res => resolve(res.data)).catch(e => reject(e))
  })
}