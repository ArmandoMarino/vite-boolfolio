import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLoader from './components/AppLoader.vue';
// Default App create e mount insieme
// createApp(App).mount('#app')

// Spezzo per mettere "qualcosa" di mezzo
const app = createApp(App);

app.component('AppLoader', AppLoader);

app.mount('#app');



