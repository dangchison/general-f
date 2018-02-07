import _filter from 'lodash/filter'
import _map from 'lodash/map'
import _uniq from 'lodash/uniq'
import portfolio from '@/api/portfolio'
import {RECEIVE_PORTFOLIO, SEARCH_PORTFOLIO} from '@/store/mutations'

const state = {
  all: [],
  key: [],
  origin: []
}

const getters = {
  allPortfolios: state => state.all,
  allKeyPortfolios: state => state.key
}

const actions = {
  getAllPortfolio ({ commit }) {
    portfolio.getPortfolio(portfolios => {
      commit(RECEIVE_PORTFOLIO, { portfolios })
    })
  },
  searchPortfolio ({ commit }, key) {
    commit(SEARCH_PORTFOLIO, {
      key: key
    })
  }
}

const mutations = {
  [RECEIVE_PORTFOLIO] (state, { portfolios }) {
    state.all = portfolios
    state.key = _uniq(_map(portfolios, item => item.key))
  },
  [SEARCH_PORTFOLIO] (state, { key }) {
    if (state.origin.length === 0) {
      state.origin = state.all
    }

    if (key !== 'all') {
      state.all = _filter(state.origin, item => {
        return item.key === key
      })
    } else {
      state.all = state.origin
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
