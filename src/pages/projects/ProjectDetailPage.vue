<script>
import axios from 'axios';
import ProjectCard from '../../components/projects/ProjectCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
    name: 'ProjectDetailPage',
    components: {
        ProjectCard
    },
    data: () => ({
        project: null,
        isLoading: false,
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            // L'id del project lo passa Router come specificato nella rotta
            const endpoint = apiBaseUrl + '/projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.log(err);
                // In caso di errore di pagina non trovata pusha a NotFoundPage
                this.$router.push({ name: 'NotFoundPage' });
            }).then(() => {
                this.isLoading = false;
            });
        }
    }, created() {
        this.getProject();
    }
}
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <project-card v-else :project="project" :isDetail="true"></project-card>
</template>