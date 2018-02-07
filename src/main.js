// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './translated/translated'
import VueProgressBar from 'vue-progressbar/dist/vue-progressbar'
import SocialSharing from 'vue-social-sharing'
import store from './store'

import 'semantic-ui-css/components/transition.min'
import 'semantic-ui-css/components/dimmer.min'
import 'semantic-ui-css/components/dropdown.min'
import 'semantic-ui-css/components/search.min'

const progressBarOpts = {
  color: '#87ffc8',
  failedColor: '#ff0000',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, progressBarOpts)
Vue.use(SocialSharing)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
