import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css' 

Vue.config.debug = true
Vue.config.productionTip = false
Vue.use(router)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App) 
}).$mount('#app');
