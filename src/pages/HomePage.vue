<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppPagination from '../components/AppPagination.vue';
// Server PHP Laravel con /api !
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
    name: 'HomePage',
    components: {
        ProjectsList,
        AppAlert,
        AppPagination
    },
    data: () => ({
        isLoading: false,
        isALertOpen: false,
        // Mettere tutto sotto la stessa chiave cosi con il Destructuring(sotto) prenderò gli elementi parlanti es : project.links
        projects: {
            data: [],
            links: []
        },
    }),
    methods: {
        fetchProjects(endpoint = null) {
            // Loading alla chiamata a true(on)
            this.isLoading = true;
            // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
            if (!endpoint) endpoint = apiBaseUrl + '/projects';
            axios.get(endpoint).then(res => {
                // Destructuring : tiro fuori data e links da res.data e lo riassegno in project dando solo data e links che sono vuoti inizialmente
                const { data, links } = res.data;
                this.projects = { data, links };

                // In res.data arrivano i dati della chiamata da axios 
                this.projects = res.data;
            })
                // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
                .catch((err) => {
                    this.isALertOpen = true;
                    console.error(err);
                })
                // Loading a chiamata finita a false (off)
                .then(() => {
                    this.isLoading = false;
                })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <app-alert :is-open="isALertOpen" @close="isALertOpen = false"></app-alert>
    <!-- AppLoader importato globalmente in main.js si vedrà (v-if) solo se isLoading sarà true -->
    <app-loader v-if="isLoading"></app-loader>
    <!-- ALtrimenti v-else vai vedere la projectsList -->
    <projects-list v-else :projects="projects.data"></projects-list>
    <app-pagination v-if="isLoading" :links="projects.links" @change-page="fetchProjects"></app-pagination>
</template>