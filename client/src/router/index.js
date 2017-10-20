import Vue from 'vue';
import Router from 'vue-router';
import Signin from '@/components/Signin';
import Main from '@/components/main';
import Settings from '@/components/settings';
import { requireAuth } from '../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Signin,
    }, {
      path: '/dashboard',
      beforeEnter: requireAuth,
      name: 'Dashboard',
      component: Main,
    }, {
      path: '/settings',
      beforeEnter: requireAuth,
      name: 'Settings',
      component: Settings,
    }
  ]
});
