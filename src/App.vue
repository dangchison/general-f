<template>
  <div id="app">
    <!-- preloader -->
    <transition name="fade">
      <div class="preloader" v-if="!show">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </transition>
    <!-- /preloader -->
    <transition name="slide-fade">
      <router-view v-if="show"/>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  mounted () {
    this.$Progress.finish()
  },
  beforeCreate () {
    setTimeout(() => {
      this.show = true
    }, 2000)
  }
}
</script>

<style>
  @import url('../node_modules/semantic-ui-css/semantic.min.css');
  @import url('../node_modules/slick-carousel/slick/slick.css');
  @import url('./service/notification/toast.css');
  @import url('./assets/css/loading.css');
  @import url('./assets/css/style.css');
</style>
