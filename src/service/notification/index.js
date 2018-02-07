/**
 * @author Sondc <dangchison@gmail.com>
 * @version v0.1
 * @package https://github.com/noru/vue-easy-toast
 * @name NotifyService
 */

import Vue from 'vue'
import Toast from 'vue-easy-toast'
import env from '../../environment/environment'
import _filter from 'lodash/filter.js'
import _isString from 'lodash/isString'

Vue.use(Toast)

export default {
  success (content, title = '', icon = true, opts = {}) {
    Vue.toast(this.renderMessage(content, title, icon, env.NOTIFY.SUCCESS), this.defaultOpts(['et-success']))
  },
  error (content, title = '', icon = true, opts = {}) {
    Vue.toast(this.renderMessage(this.filterMessage(content), title, icon, env.NOTIFY.ERROR), this.defaultOpts(['et-error']))
  },
  filterMessage (message) {
    if (_isString(message)) {
      return message
    }

    return _filter(message, (msg) => {
      return msg[0]
    })
  },
  warning (content, title = '', icon = true, opts = {}) {
    Vue.toast(this.renderMessage(content, title, icon, env.NOTIFY.WARNING), this.defaultOpts(['et-warning']))
  },
  info (content, title = '', icon = true, opts = {}) {
    Vue.toast(this.renderMessage(content, title, icon, env.NOTIFY.INFO), this.defaultOpts(['et-info']))
  },
  renderMessage (content, title, icon, type) {
    let msg

    if (icon) {
      msg = "<div class='notify-warp'>"
      msg += this.addIcon(type)
    } else {
      msg = "<div class='notify-warp notify-warp_no-icon'>"
    }

    msg += "<div class='notify-description'>"

    if (title) {
      msg += "<div class='title'>" + title + '</div>'
    }

    msg += "<div class='content'>" + content + '<div><div><div>'

    return msg
  },
  defaultOpts (className) {
    return {
      duration: env.NOTIFY.DURATION,
      mode: 'override', // override or queue. If override, the last toast will forcibly flush previous
      closeable: false,
      horizontalPosition: 'right', // left, right and center
      verticalPosition: 'top', // top and bottom
      transition: 'slide-down', // slide-[up/down/left/right]
      className: className
    }
  },
  addIcon (type, icon) {
    let msg = "<div class='notify-icon'>"

    switch (type) {
      case env.NOTIFY.SUCCESS:
        msg += "<i class='icon checkmark'></i>"
        break
      case env.NOTIFY.ERROR:
        msg += "<i class='icon remove circle'></i>"
        break
      case env.NOTIFY.WARNING:
        msg += "<i class='icon warning sign'></i>"
        break
      case env.NOTIFY.INFO:
        msg += "<i class='icon info circle'></i>"
        break
    }

    msg += '</div>'

    return msg
  }
}
