import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入基本样式
import './assets/base.css'
//引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import './assets/styles/flexible.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
