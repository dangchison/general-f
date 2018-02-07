import axios from 'axios'
import ENV from '@/environment/environment'

export const HTTP_PRIVATE = axios.create({
  baseURL: ENV.API.PATH
})

if (localStorage.getItem(ENV.LOCALSTORAGE.TOKEN)) {
  HTTP_PRIVATE.defaults.headers.common[ENV.API.AUTHORIZATION] = ENV.API.BEARER + localStorage.getItem(ENV.LOCALSTORAGE.TOKEN)
}

export const HTTP_PUBLIC = axios.create()
