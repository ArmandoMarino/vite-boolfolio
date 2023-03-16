<script>
export default {
    name: 'NotFoundPage'
}
</script>

<template>
    <div id="not-found-page" class="d-flex flex-column align-items-cente justify-content-center text-center">
        <h2>404 | Not Found</h2>
        <button @click="$router.back()" class="btn btn-secondary">Back</button>
    </div>
</template>

<style scoped lang="scss">
#not-found-page {
    height: 90vh;
}
</style>