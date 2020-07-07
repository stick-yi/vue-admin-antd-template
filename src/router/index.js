import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/Layouts';
import modules from './module/';

// 解决重复点击当前路由报错bug
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  ...modules,
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    name: 'Demo1',
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Demo1-1',
        component: () =>
          import(/* webpackChunkName: 'login' */ '@/views/demo/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/Login/index.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/404.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
