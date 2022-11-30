import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
createApp(App)
    .use(createPinia())//启动pinia状态管理
    .use(router)//启用理由
    .mount('#app')
