/**
 * @author Sondc <dangchison@gmail.com>
 * @version v0.1
 * @package none
 * @name Authentication
 */

import env from '../environment/environment'

export default {
  isAuthenticated () {
    if (localStorage.getItem(env.LOCALSTORAGE.USER) && localStorage.getItem(env.LOCALSTORAGE.TOKEN)) {
      return true
    }

    return false
  },
  setToken (token, key = env.LOCALSTORAGE.TOKEN) {
    localStorage.setItem(key, token)
  },
  getToken () {
    let token = localStorage.getItem(env.LOCALSTORAGE.TOKEN)
    return token
  },
  setUser (user = {}, key = env.LOCALSTORAGE.USER) {
    localStorage.setItem(key, JSON.stringify(user))
  },
  getUser () {
    let user = JSON.parse(localStorage.getItem(env.LOCALSTORAGE.USER))
    return user
  },
  logout () {
    localStorage.clear()
  }
}
