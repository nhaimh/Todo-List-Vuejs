import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../components/edit.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../components/detail.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
