import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
import { useUserStore } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    name: "index",
    path: "/",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: 'user-ms',
        component: () => import('@/views/UserManage.vue')
      }, {
        path: "todo-ms",
        component: () => import("@/views/TodoManage.vue")
      }, {
        path: "center",
        component: () => import("@/views/Center.vue")
      }
    ]
  }, {
    name: 'login',
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: { requiresAuth: false }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.logined && to.name !== "login") next({ name: "login" })
  else next()
})

export default router