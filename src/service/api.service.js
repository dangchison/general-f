/**
 * @author Sondc <dangchison@gmail.com>
 * @version v0.1
 * @package https://github.com/pagekit/vue-resource
 * @name APIService
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
import env from '../environment/environment'
import notify from './notification/toast.service'
import authService from './auth.service'

Vue.use(VueResource)

// Config http
Vue.http.options.root = env.API.PATH
Vue.http.options.emulateHTTP = env.API.EMULATE_HTTP
Vue.http.options.emulateJSON = env.API.EMULATE_JSON

// Handle request (before|after)
Vue.http.interceptors.push(function (request, next) {
  // modify headers
  if (localStorage.getItem(env.LOCALSTORAGE.TOKEN)) {
    // request.headers.set('X-CSRF-TOKEN', 'TOKEN')
    request.headers.set(env.API.AUTHORIZATION, env.API.BEARER + localStorage.getItem(env.LOCALSTORAGE.TOKEN))
  }

  next()
})

export default {
  _setHeader () {
    Vue.http.headers.common[env.API.AUTHORIZATION] = env.API.BEARER + localStorage.getItem(env.LOCALSTORAGE.TOKEN)
  },
  /**
   *
   * @param {String} url
   * @param {Object} request
   *
   * @description get data to server from client
   */
  get (url, request) {
    return Vue.http.get(url, request)
      .then((response) => this.handleSuccess(response))
      .catch((error) => this.handleError(error)) // Promise.reject(error)
  },
  /**
   *
   * @param {String} url
   * @param {Object} request
   *
   * @description push data from client to server
   */
  post (url, request) {
    return Vue.http.post(url, request)
      .then((response) => this.handleSuccess(response))
      .catch((error) => this.handleError(error)) // Promise.reject(error)
  },
  /**
   *
   * @param {String} url
   * @param {Object} request
   *
   * @description push data from client to server
   */
  patch (url, request) {
    return Vue.http.patch(url, request)
      .then((response) => this.handleSuccess(response))
      .catch((error) => this.handleError(error)) // Promise.reject(error)
  },
  /**
   *
   * @param {String} url
   * @param {Object} request
   *
   * @description push data from client to server
   */
  delete (url, request) {
    return Vue.http.delete(url, request)
      .then((response) => this.handleSuccess(response))
      .catch((error) => this.handleError(error)) // Promise.reject(error)
  },
  /**
   *
   * @param {any} success
   *
   * @description handle response data from server return
   */
  handleSuccess (success) {
    if (success.status === env.STATUS._200) {
      return Promise.resolve(success.body.data)
    }
  },
  /**
   *
   * @param {String | Object} error
   *
   * @description handle response data from server return
   */
  handleError (error) {
    let content = error.body.errors
    let title = error.body.message

    if (!content) {
      content = title
    }

    if (error.status === env.STATUS._401) {
      notify.error(content, env.STATUS._401)
      authService.logout()
    } else if (error.status === env.STATUS._500) {
      console.log(env.STATUS._500)
    } else {
      if (!content) {
        content = title
        title = ''
      }
      notify.error(content, title)
    }
  }
}
