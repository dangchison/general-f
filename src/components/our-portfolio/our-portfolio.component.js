import { mapGetters, mapActions } from 'vuex'
import PortfolioItem from '@/components/our-portfolio/portfolio-item'
import PortfolioSearch from '@/components/our-portfolio/portfolio-search'

export default {
  name: 'OurPortfolio',
  components: { PortfolioItem, PortfolioSearch },
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
