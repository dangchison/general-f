import {MODAL_OPEN, MODAL_CLOSE, MODAL_CLEAR} from '@/store/mutations'

const state = {
  modalName: '',
  modalData: {},
  modalResult: {},
  modalOpts: {
    closable: false,
    inverted: false,
    blurring: false
  }
}

// getters
const getters = {
  modalData: state => state.modalData,
  modalResult: state => state.modalResult
}

const actions = {
  modalOpen ({commit}, modalObj) {
    commit(MODAL_OPEN, {
      modalObj: modalObj
    })
  },
  modalClose ({commit}, modalObj) {
    commit(MODAL_CLOSE, {
      modalObj: modalObj
    })
  },
  modalClear ({commit}) {
    commit(MODAL_CLEAR)
  }
}

const mutations = {
  [MODAL_OPEN] (state, {modalObj}) {
    state.modalName = '.' + modalObj.name + '.modal'
    let _modalObj = $(state.modalName).modal(state.modalOpts)

    if (modalObj.data) {
      state.modalData = modalObj.data
    }

    if (!modalObj.isEffect) {
      modalObj.effectName = modalObj.effectName ? modalObj.effectName : 'slide down'
      _modalObj = _modalObj.modal('setting', 'transition', modalObj.effectName)
    }

    _modalObj.modal('show')
  },
  [MODAL_CLOSE] (state, {modalObj}) {
    $(state.modalName).modal('hide')
    state.modalData = {}
    state.modalName = ''
    if (modalObj) {
      state.modalResult = modalObj
    }
  },
  [MODAL_CLEAR] (state) {
    state.modalName = ''
    state.modalData = {}
    state.modalResult = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
