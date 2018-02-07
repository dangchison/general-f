import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'OurPortfolio',
  components: {},
  props: [],
  data () {
    return {
      keyName: 'all'
    }
  },
  created () {
    this.getAllPortfolio()
  },
  computed: Object.assign(
    {},
    mapGetters([
      'allPortfolios',
      'allKeyPortfolios'
    ])
  ),
  mounted () {

  },
  methods: Object.assign(
    {},
    mapActions([
      'getAllPortfolio',
      'searchPortfolio'
    ]),
    {
      getImage (image) {
        return require(`@/assets/images/portfolio/${image}`)
      },
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
