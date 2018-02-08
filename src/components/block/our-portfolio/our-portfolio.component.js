import { mapGetters, mapActions } from 'vuex'
import ElementPortfolio from '@/components/block/element-portfolio'
import PortfolioSearch from '@/components/block/portfolio-search'

export default {
  name: 'OurPortfolio',
  components: { ElementPortfolio, PortfolioSearch },
  props: [],
  data () {
    return {

    }
  },
  created () {
    this.getAllPortfolio()
  },
  computed: mapGetters([
    'allPortfolios'
  ]),
  mounted () {

  },
  methods: mapActions([
    'getAllPortfolio'
  ])
}
