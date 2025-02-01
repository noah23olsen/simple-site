import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { inject } from '@vercel/analytics';
import 'bootstrap/dist/css/bootstrap.min.css';

inject();
createApp(App)
  .use(router)
  .mount('#app');

