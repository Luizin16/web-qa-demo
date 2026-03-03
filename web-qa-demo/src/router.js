import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/LoginView.vue";
import DashboardView from "./views/DashboardView.vue";
import { isAuthenticated } from "./auth";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return "/login";
  }
});

export default router;