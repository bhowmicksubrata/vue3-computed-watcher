import { createApp } from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
//createApp.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
//createApp.use(IconsPlugin)

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'
createApp(App).mount('#app')
