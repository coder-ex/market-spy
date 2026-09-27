import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Auth/Login.vue';
import Register from './pages/Auth/Register.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp({
    template: '<router-view></router-view>'
});

app.use(router);
app.mount('#app');
