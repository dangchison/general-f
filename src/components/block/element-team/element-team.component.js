export default {
  name: 'ElementTeam',
  components: {},
  props: ['employee'],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showImage (src) {
      return require(`@/assets/images/employee/${src}`)
    }
  }
}
