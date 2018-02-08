import { mapActions, mapGetters } from 'vuex'
import Slick from 'vue-slick'
import BlockEmployee from '@/components/block/element-team'

export default {
  name: 'OurTeam',
  components: { Slick, BlockEmployee },
  props: [],
  data () {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  },
  created () {
    this.getAllTeam()
  },
  computed: mapGetters([
    'teamsMember'
  ]),
  mounted () {

  },
  methods: Object.assign(
    {},
    mapActions([
      'getAllTeam'
    ])
  ),
  updated () {
    this.$nextTick(() => {
      $('.card.team .image').dimmer({
        on: 'hover'
      })
    })
  }
}
