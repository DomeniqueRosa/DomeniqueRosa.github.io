import { createRouter, createWebHistory } from 'vue-router';
import TheForm from '../components/TheForm.vue';
import MessageForm from '../components/MessageForm.vue';

const routes = [
  { path: '', component: TheForm },
  { path: '/success/:email?', component: MessageForm} // "?" torna o email opcional
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

