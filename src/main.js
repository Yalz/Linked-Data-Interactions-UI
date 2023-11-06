import {createApp} from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import { createRouter,createWebHashHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HelloWorld from "@/components/PipelineOverview.vue";
import PipelineCreation from "@/components/PipelineCreation.vue";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/create', component: PipelineCreation },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App).use(vuetify).use(router).mount('#app')
