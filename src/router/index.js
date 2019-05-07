import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Pages/Home';
import About from '../components/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
