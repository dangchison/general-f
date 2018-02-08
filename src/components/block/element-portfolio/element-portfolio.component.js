export default {
  name: 'element-portfolio',
  components: {},
  props: ['portfolio'],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getImage (image) {
      return require(`@/assets/images/portfolio/${image}`)
    }
  }
}
