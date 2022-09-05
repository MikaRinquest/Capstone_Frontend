import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/businesslogin",
    name: "BusinessLoginView",
    component: () => import("../views/start/Login/BusinessLoginView.vue"),
  },

  {
    path: "/userlogin",
    name: "UserLoginView",
    component: () => import("../views/start/Login/UserLoginView.vue"),
  },

  {
    path: "/businessRegister",
    name: "BusinessRegister",
    component: () => import("../views/start/Register/BusinessRegister.vue"),
  },

  {
    path: "/userRegister",
    name: "UserRegister",
    component: () => import("../views/start/Register/UserRegister.vue"),
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
    component: () => import("@/views/User/SingleProductView.vue"),
    props: true, //allows us to accept a route parameter as a prop
  },

  {
    path: "/cart",
    name: "CartView",
    component: () => import("@/views/User/CartView.vue"),
  },

  {
    path: "/checkout",
    name: "CheckoutView",
    component: () => import("@/views/User/Checkout.vue"),
  },

  {
    path: "/contact",
    name: "ContactView",
    component: () => import("@/views/User/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
