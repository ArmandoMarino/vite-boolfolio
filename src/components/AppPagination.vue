<script>
export default {
    name: 'AppPagination',
    props: { links: Array },
}
</script>

<template>
    <nav>
        <ul class="pagination">
            <!-- Classi : sarà active (true o false) prendendo dalla chiamata link.active e disabled quando !non avrà link url
                    Lo stesso per i bottoni (bottoni perche con le a ricarica la pagina e :disabled stessa logica ) 
                    v-html per interpretare il linguaggio html passato per i bottoni next e previous-->
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="[{ 'active': link.active }, { 'disabled': !link.url }]">

                <button @click="$emit('change-page', link.url)" class="page-link" href="#" :disabled="!link.url"
                    v-html="link.label"></button>
            </li>
        </ul>
    </nav>
</template>