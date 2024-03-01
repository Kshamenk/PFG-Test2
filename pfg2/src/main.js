import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from './components/RegistrationForm.vue';
import UserProfile from './components/UserProfile.vue';

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/register', name: 'register', component: RegistrationForm },
  { path: '/profile', name: 'profile', component: UserProfile }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);

const backendUrl = 'http://127.0.0.1:5173';
app.config.globalProperties.$backendUrl = backendUrl;

router.beforeEach((to, from, next) => {
    if (to.name === 'profile' && from.name === 'register') {
      if (!from.params.registeredUser) {
        next();
      } else {
        // Avoid infinite loop ;)
        next(false);
      }
    } else {
      next();
    }
  });

app.mount('#app');