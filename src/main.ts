import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'tailwindcss/dist/tailwind.min.css'

createApp(App)
.use(router)
.mount('#app')
