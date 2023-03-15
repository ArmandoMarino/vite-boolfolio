<script>
export default {
    name: 'ProjectsList',
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list" class="my-4">
        <ul v-if="projects.length">
            <li>
            <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
            </li>
        </ul>
        <h3 v-else class="text-center">No Projects available</h3>
    </section>
</template>