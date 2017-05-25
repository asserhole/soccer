import Vue from 'vue'
import App from './App.vue'
import router from './router.config.js'
import 'mint-ui/lib/style.css'
import './assets/rem.js'
import './ui_com.js'







new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
