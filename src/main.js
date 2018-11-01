import Vue from 'vue'
import "../public/assets/css/old/global.css"
import "../public/assets/css/old/index.css"
import "../public/assets/css/old/login.css"
import "../public/assets/css/old/main.css"
import "../public/assets/css/old/menu.css"
import "../public/assets/css/old/newQRcode.css"
import "../public/assets/css/old/shopCart.css"
import "../public/assets/css/old/swiper-4.1.6.min.css"
import "../public/assets/css/old/userCenter.css"
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
