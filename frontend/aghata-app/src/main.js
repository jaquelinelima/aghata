import './index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import 'nprogress/nprogress.css';
import Vuelidate from 'vuelidate';

createApp(App).use(router).use(store).use(Vuelidate).mount('#app')
