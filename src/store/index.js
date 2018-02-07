import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import createLogger from './debug/logger'
import Portfolio from './modules/portfolio'
import Team from './modules/team'
import Languages from './modules/languages'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    Portfolio,
    Team,
    Languages
  },
  plugins: debug ? [createLogger()] : []
})
