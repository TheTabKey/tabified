import Vue from 'vue';
import Router from 'vue-router';
import Starter from './pages/Index.vue';
import StarterNavbar from './layout/Navbar.vue';
import StarterFooter from './layout/Footer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: Starter,
        header: StarterNavbar,
        footer: StarterFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
    path: '/discord',
    redirect: 'https://discord.com/invite/yV3pys7Nma'
  }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
