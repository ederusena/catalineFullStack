import { createApp } from "vue";
import App from "./App.vue";
import highlight from "./directives/highlight";

const app = createApp(App)

app.directive("highlight", highlight);

app.mount("#app");