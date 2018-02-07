export default {
  API: {
    PATH: process.env.API_URL,
    EMULATE_JSON: false,
    EMULATE_HTTP: true,
    AUTHORIZATION: 'Authorization',
    BEARER: 'Bearer '
  },
  LINE: {
    AUTHORIZE: process.env.LINE_AUTHORIZE,
    CLIENT_ID: process.env.LINE_CLIENT_ID,
    CALLBACK_URL: process.env.LINE_CALLBACK_URL,
    SCOPE: process.env.LINE_SCOPE
  },
  LOCALSTORAGE: {
    TOKEN: 'rekuru_token',
    USER: 'rekuru_user'
  },
  LANGUAGE: {
    ENGLISH: 'en',
    JAPANESE: 'ja'
  },
  NOTIFY: {
    SUCCESS: 0,
    ERROR: 1,
    WARNING: 2,
    INFO: 3,
    DURATION: 3000
  },
  STATUS: {
    _200: 200,
    _401: 401,
    _500: 500
  },
  PAGINATE: {
    NEXT: 1,
    PREV: 0
  }
}
