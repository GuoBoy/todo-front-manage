export interface MenuItem {
  title: string
  path: string
  icon: string
}

export const menus: MenuItem[] = [
  {
    title: "首页",
    path: "home",
    icon: "house-door"
  }, {
    title: "用户管理",
    path: "user-ms",
    icon: "device-ssd"
  }, {
    title: "todo管理",
    path: "todo-ms",
    icon: "device-ssd"
  }, {
    title: "用户中心",
    path: "center",
    icon: "user"
  }
]