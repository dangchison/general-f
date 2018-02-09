import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'portfolio-search',
  components: {},
  props: [],
  data () {
    return {
      keyName: 'all'
    }
  },
  computed: mapGetters([
    'allKeyPortfolios'
  ]),
  mounted () {

  },
  methods: Object.assign(
    {},
    mapActions([
      'searchPortfolio'
    ]),
    {
      showKey (key) {
        return key.replace('_', ' ')
      },
      search (key) {
        this.searchPortfolio(key)
        this.keyName = key
      },
      isActive (key) {
        return this.keyName === key
      }
    }
  )
}
