import Slick from 'vue-slick'

export default {
  name: 'Slider',
  components: { Slick },
  props: [],
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false
      }
    }
  },
  computed: {
    slickSlider () {
      let _avatarArr = ['sl0.jpg', 'sl1.jpg', 'sl4.jpg']
      let _slider = []

      _avatarArr.forEach(item => {
        _slider.push({avatar_url: require(`@/assets/images/slider/${item}`)})
      })

      return _slider
    }
  },
  mounted () {},
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
