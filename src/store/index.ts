import { UserInfoModel } from '@/model/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user-store', () => {
  const userInfo = ref<UserInfoModel>({
    username: "",
    password: "",
    token: ""
  })
  const logined = ref(false)

  const setUserInfo = (userinfo: UserInfoModel) => {
    userInfo.value = userinfo
    logined.value = true
    // try {
    //   localStorage.setItem('token', userinfo.token)
    // } catch (error) {
    //   console.log(error);
    // }

  }
  return {
    userInfo, setUserInfo, logined
  }
})