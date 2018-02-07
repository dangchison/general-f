import { mapGetters, mapActions } from 'vuex'
import notify from '@/service/notification'

export default {
  name: 'Header',
  components: {},
  props: [],
  data () {
    return {
      scrolled: false,
      langDefault: 'English',
      goToTop: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.getAllLanguages()
  },
  computed: mapGetters([
    'languages',
    'arr_lang'
  ]),
  mounted () {
    $('.ui.dropdown.language').dropdown({
      onChange: (value, text, $selectedItem) => {
        this.checkLanguague(value)
      }
    })
  },
  methods: Object.assign(
    {},
    mapActions([
      'getAllLanguages',
      'setLanguage'
    ]),
    {
      handleScroll () {
        this.scrolled = window.scrollY > 0
        this.goToTop = window.scrollY > 200
      },
      checkLanguague (lang) {
        if (this.arr_lang.indexOf(lang) !== -1) {
          this.$i18n.locale = lang
        } else {
          notify.error(this.$t('message.lang_error'))
        }
      },
      scrollToTop () {
        $('html, body').animate({ scrollTop: 0 }, 700)
      }
    }
  ),
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
