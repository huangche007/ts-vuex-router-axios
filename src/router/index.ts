import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Products.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/home/Cart.vue"),
  },
  {
    path: "/details/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/home/Details.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/account/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
