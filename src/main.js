import './assets/main.css'
import './assets/scss/output.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)

app.mount('#app')
