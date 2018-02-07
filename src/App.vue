<template>
  <div id="app">
    <!-- preloader -->
    <transition name="fade">
      <div class="preloader" v-if="!show">
        <div class="ui massive active centered inline text loader"></div>
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
  @import url('../node_modules/semantic-ui-css/components/reset.min.css');
  @import url('./assets/css/site.css');
  @import url('../node_modules/semantic-ui-css/components/container.min.css');
  @import url('../node_modules/semantic-ui-css/components/grid.min.css');
  @import url('../node_modules/semantic-ui-css/components/icon.min.css');
  @import url('../node_modules/semantic-ui-css/components/accordion.min.css');
  @import url('../node_modules/semantic-ui-css/components/button.min.css');
  @import url('../node_modules/semantic-ui-css/components/comment.min.css');
  @import url('../node_modules/semantic-ui-css/components/dimmer.min.css');
  @import url('../node_modules/semantic-ui-css/components/dropdown.min.css');
  @import url('../node_modules/semantic-ui-css/components/form.min.css');
  @import url('../node_modules/semantic-ui-css/components/input.min.css');
  @import url('../node_modules/semantic-ui-css/components/header.min.css');
  @import url('../node_modules/semantic-ui-css/components/item.min.css');
  @import url('../node_modules/semantic-ui-css/components/search.min.css');
  @import url('../node_modules/semantic-ui-css/components/sidebar.min.css');
  @import url('../node_modules/semantic-ui-css/components/menu.min.css');
  @import url('../node_modules/semantic-ui-css/components/popup.min.css');
  @import url('../node_modules/semantic-ui-css/components/progress.min.css');
  @import url('../node_modules/semantic-ui-css/components/label.min.css');
  @import url('../node_modules/semantic-ui-css/components/loader.min.css');
  @import url('../node_modules/semantic-ui-css/components/modal.min.css');
  @import url('../node_modules/semantic-ui-css/components/transition.min.css');
  @import url('../node_modules/semantic-ui-css/components/list.min.css');
  @import url('../node_modules/semantic-ui-css/components/image.min.css');
  @import url('../node_modules/semantic-ui-css/components/segment.min.css');
  @import url('../node_modules/semantic-ui-css/components/message.min.css');
  @import url('../node_modules/semantic-ui-css/components/reveal.min.css');
  @import url('../node_modules/slick-carousel/slick/slick.css');
  @import url('./service/notification/toast.css');

.preloader {
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0, 0%, 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 3s;
}
.fade-slow-enter,
.fade-slow-leave-to {
  opacity: 0;
}
.ui.list.list-social>.item {
  cursor: pointer;
}
</style>
