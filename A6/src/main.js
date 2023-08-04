import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css'


const app = createApp(App)

app.use(router)
app.use(BootstrapVueNext)

import fixtures from './fixtures.json'
app.config.globalProperties.fixtures = fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
