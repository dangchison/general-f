import { mapActions, mapGetters } from 'vuex'
import Slick from 'vue-slick'

export default {
  name: 'OurTeam',
  components: { Slick },
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
    ]),
    {
      showImage (src) {
        return require(`@/assets/images/employee/${src}`)
      }
    }
  )
}
