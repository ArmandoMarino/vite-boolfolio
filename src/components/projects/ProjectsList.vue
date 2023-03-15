<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list" class="my-4">
        <div v-if="projects.length">
            <project-card v-for="project in projects" :key="project.id" :project="project">
                {{ project.title }}
            </project-card>
        </div>
        <h3 v-else class="text-center">No Projects available</h3>
    </section>
</template>