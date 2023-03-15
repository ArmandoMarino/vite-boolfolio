<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        projectDateUpdated() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) day = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        projectDateCreated() {
            const date = new Date(this.project.created_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) day = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        abstractDescription() {
            const abstract = this.project.description.slice(0, 300);
            return abstract + '...';
        }

    },
};
</script>

<template>
    <div class="card my-4">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{ abstractDescription }}
            </p>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <p>Pubblicated at : {{ projectDateCreated }}</p>
                <p>Updated at : {{ projectDateUpdated }}</p>
                <a href="#" class="btn btn-primary">Show details</a>
            </div>
        </div>
    </div>
</template>