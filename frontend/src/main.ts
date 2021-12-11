import { createApp } from "vue";
import App from "./App.vue";
import ButtonStyled from './components/ButtonStyled.vue'
import "@fortawesome/fontawesome-free/css/all.css"

createApp(App)
  .component("ButtonStyled", ButtonStyled)
  .mount("#app");
