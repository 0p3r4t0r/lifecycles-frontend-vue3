import { createApp } from 'vue'
import App from '@/App.vue'
import { makeServer } from '@/mirage/server'
import router from '@/router';

const app = createApp(App).use(router);

app.config.globalProperties.productionTip = false;

if (process.env.NODE_ENV === "development") {
    makeServer();
}

app.mount('#app');