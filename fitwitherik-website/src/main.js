import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from '@/plugins/i18n'
Vue.config.productionTip = false
Vue.use(VueAxios, axios);




new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
