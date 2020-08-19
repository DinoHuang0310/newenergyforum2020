// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VModal)
Vue.use(VueAnalytics, {
    id: ['UA-173641001-1', 'UA-4950332-1']
})

new Vue({
    render: h => h(App),
}).$mount('#app')