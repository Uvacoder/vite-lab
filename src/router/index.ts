import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Modal from '../views/experiments/Modal.vue';
import Battery from '../views/experiments/Battery.vue';
import FancyClock from '../views/experiments/FancyClock.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/modal', name: 'Modal', component: Modal },
  { path: '/battery', name: 'Battery', component: Battery },
  { path: '/fancy-clock', name: 'Battery', component: FancyClock },
];

export default routes;
