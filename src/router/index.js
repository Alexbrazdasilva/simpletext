import Vue from "vue";
import VueRouter from "vue-router";
import { isAuthenticated, isNotAuthenticated } from "@middlewares/Auth.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: isNotAuthenticated,
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: isNotAuthenticated,
    component: () => import("@views/About.vue"),
  },
  {
    path: "/register",
    alias: "/signup",
    name: "Register",
    beforeEnter: isAuthenticated,
    component: () =>
      import(/* webpackChunkName: "register" */ "@views/Register.vue"),
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
