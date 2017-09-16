import Vue from 'vue';
import Router from 'vue-router';
import Signin from '@/components/Signin';
import Main from '@/components/main';
import Settings from '@/components/settings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Signin,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Main,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    }
  ]
});
