import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import { MdIcon,MdInput,MdCard,MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vue-material/dist/vue-material.min.css'
import vuetify from './plugins/vuetify'
// import 'vue-material/dist/theme/default.css'


// Vue.use(MdButton)
// Vue.use(MdCard)
// Vue.use(MdInput)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdIcon)



Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
