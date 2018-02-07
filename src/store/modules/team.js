import team from '@/api/team'
import {RECEIVE_TEAM} from '@/store/mutations'

const state = {
  all: []
}

const getters = {
  teamsMember: state => state.all
}

const actions = {
  getAllTeam ({ commit }) {
    team.getAllTeam(teams => {
      commit(RECEIVE_TEAM, {teams})
    })
  }
}

const mutations = {
  [RECEIVE_TEAM] (state, { teams }) {
    state.all = teams
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
