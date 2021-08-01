import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// async function authorizationMiddleware(
//   to: any,
//   from: any,
//   next: any
// ): Promise<void> {
//   try {
//     if (await HttpService.Authorization()) {
//       next();
//     } else {
//       next("/login");
//     }
//   } catch {
//     next("/login");
//   }
// }

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
    // beforeEnter: authorizationMiddleware
  },
  {
    path: "/todo",
    name: "Todo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/todo/todo.index.vue")
    // beforeEnter: authorizationMiddleware
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
