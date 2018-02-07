import languages from '@/api/languages'
import {RECEIVE_LANGUAGES} from '@/store/mutations'

const state = {
  all: [],
  arr_lang: ['en', 'vi']
}

const getters = {
  languages: state => state.all,
  arr_lang: state => state.arr_lang
}

const actions = {
  getAllLanguages ({ commit }) {
    languages.getAllLanguages(languages => {
      commit(RECEIVE_LANGUAGES, {languages})
    })
  }
}

const mutations = {
  [RECEIVE_LANGUAGES] (state, { languages }) {
    state.all = languages
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
