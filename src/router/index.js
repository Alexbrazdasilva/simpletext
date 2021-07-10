import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@views/Home.vue";
import isAuthenticated from "@middlewares/Auth.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: isAuthenticated,
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: isAuthenticated,
    component: () => import("@views/About.vue"),
  },
  {
    path: "/register",
    alias: "/signup",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
