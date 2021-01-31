<template>
  <div id="app" :class="isPopup">
    <Navbar v-if="!isPopup" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      isPopup: null,
    }
  },
  watch: {
    '$route': {
      handler: 'handlePopup',
      immediate: true
    }
  },
  methods: {
    handlePopup() {
      this.isPopup = this.$route.path === "/goodbye" ? 'popup' : null
    }
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-width: $cont-width;
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: $cont-bg;

  &.popup {
    min-width: 0;
  }
}
</style>
