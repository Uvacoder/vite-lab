import { RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue';
import Modal from '../views/experiments/Modal.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/modal', name: 'Modal', component: Modal }
]

export default routes;
