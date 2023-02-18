import { createApp } from 'vue'
import App from './app.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router";
import { createGtm } from "@gtm-support/vue-gtm";

loadFonts()

createApp(App).use(vuetify).use(router).use(
  createGtm({
    id: '', // Your GTM single container ID
  })
).mount('#app')
