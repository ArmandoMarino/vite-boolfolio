// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetailPage from '../pages/projects/ProjectDetailPage.vue';
import TypeProjectsPage from '../pages/projects/TypeProjectsPage.vue';

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

        //Rotta per lo show del Project con slug invece che id (scelte)
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage },

        //Rotta per il recupero dei projects appartenenti a un type
        { path: '/types/:id/projects', name: 'type-projects', component: TypeProjectsPage },

        // La funzione pathM        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage },
        { path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage },

    ]
});

export { router }