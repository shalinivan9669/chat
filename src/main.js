import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');

Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Разрешение на уведомления получено');
    } else {
      console.log('Уведомления отклонены');
    }
  });