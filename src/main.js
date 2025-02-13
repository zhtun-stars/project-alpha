import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/_global.scss'

import App from './App.vue'
// import { RadioButton } from 'ant-design-vue'

const app = createApp(App)
// app.component('Greeting', Greeting)

app.use(createPinia())
// app.use(RadioButton)
app.mount('#app')
