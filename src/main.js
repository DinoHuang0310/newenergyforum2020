import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VModal)

new Vue({
    render: h => h(App),
}).$mount('#app')