import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-dark-noir/theme.css";

const app = createApp(App);
app.use(PrimeVue).mount("#app");
