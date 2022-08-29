import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/start/Login.vue"),
  },

  {
    path: "/businessRegister",
    name: "BusinessRegister",
    component: () => import("../views/start/BusinessRegister.vue"),
  },

  {
    path: "/userRegister",
    name: "UserRegister",
    component: () => import("../views/start/UserRegister.vue"),
  },

  {
    path: "/account",
    name: "AccountView",
    component: () => import("../views/Business/AccountView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
