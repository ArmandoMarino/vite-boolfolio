// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';

// Creo il Router e definisco le rotte
const router = createRouter({
    // History delle pagine
    history: createWebHistory(),
    // Rotte che useremo
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },

    ]
});

export { router }