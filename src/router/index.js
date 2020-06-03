import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "board"
  },
  {
    path: "/board",
    name: "board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/BoardView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
