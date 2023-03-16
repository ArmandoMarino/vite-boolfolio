// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetailPage from '../pages/projects/ProjectDetailPage.vue';

import NotFoundPage from '../pages/NotFoundPage.vue';

// Creo il Router e definisco le rotte
const router = createRouter({
    // History delle pagine
    history: createWebHistory(),
    // Importo la classe da avere in active
    linkExactActiveClass: 'active',
    linkActiveClass: 'active',

    // Rotte che useremo
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },
        //Rotta per lo show del Project
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },

        // La funzione pathMatch con la * prende qualsiasi cosa diversa e redirect alla 404 page
        { path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage },

    ]
});

export { router }