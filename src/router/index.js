import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
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

  {
    path: "/products",
    name: "ProductView",
    component: () => import("../views/Business/ProductsView.vue"),
  },

  {
    path: "/",
    name: "HomeView",
    component: () => import("@/views/User/HomeView.vue"),
  },

  {
    path: "/allproducts",
    name: "Products",
    component: () => import("@/views/User/ProductsView.vue"),
  },

  {
    path: "/allproducts/:id",
    name: "SingleCardView",
    component: () => import("@/views/User/SingleCardView.vue"),
    props: true, //allows us to accept a route parameter as a prop
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
