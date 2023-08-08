import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/micro",
    name: "Home",
    component: () => import("../views/Home.vue")
  }
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
