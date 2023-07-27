import NProgress from 'nprogress';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/pages/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/auth-components/RegisterComponent.vue'),
  },
  {
    path: '/forgotpassword',
    name: 'Forgot Password',
    component: () => import('../components/auth-components/ForgotPasswordComponent.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/pages/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;