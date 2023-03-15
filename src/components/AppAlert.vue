<script>
export default {
    name: 'AppAlert',
    // Props passate per logica chiudi apri
    props: { isOpen: Boolean },
    emits: ['close']
}
</script>

<template>
    <!-- V-if se aperto e onclick passa close-->
    <div v-if="isOpen" class="alert alert-warning alert-dismissible fade show w-50 m-auto my-3" role="alert">
        <strong>Error</strong> An Error has occurred.
        <button type="button" @click="$emit('close')" class="btn-close"></button>
    </div>
</template>

