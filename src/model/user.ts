// 登录表单模型
export interface LoginForm {
  username: string
  password: string
}

// 存储用户信息
export interface UserInfoModel {
  username: string
  password: string
  token: string
}

export interface UserItem {
  id: number
  username: string
  created_at: string
  updated_at: string
  last_update_time: number
}

export interface OPPwdModel {
  op: string
  np: string
}