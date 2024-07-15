// main.js
import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // Обратите внимание на правильный импорт

import App from './App.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Test',
        path: '/test',
        component: Test
    }
    ]
});

const app = createApp(App);
app.use(router); // Используйте метод use для регистрации маршрутизатора
app.mount('#app');
