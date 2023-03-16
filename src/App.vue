<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    HomePage
  },

}
</script>

<template>
  <app-header></app-header>
  <!-- Router "switcha" tra le pagine -->
  <main class="container">
    <router-view></router-view>
  </main>
</template>