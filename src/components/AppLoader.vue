<script>
export default {
    name: 'Apploader'
};
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;


    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.spinner-border {
    height: 150px;
    width: 150px;
    z-index: 2;
}
</style>