import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import {createPinia} from "pinia";
import "normalize.css/normalize.css"

axios.defaults.baseURL = 'http://localhost:8888'
const pinia = createPinia();
const app = createApp(App)
    .use(ElementPlus, {locale: zhCn})
    .use(router)
    .use(pinia)
    .mount('#app')
