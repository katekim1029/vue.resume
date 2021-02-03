<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <router-link class="btn-fake" to="/posts" v-if="isFakeBtn">F</router-link>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      isFakeBtn: true
    }
  },
  watch: {
    '$route': {
      handler: 'handleFakeBtn',
      immediate: true
    }
  },
  methods: {
    handleFakeBtn() {
      this.isFakeBtn = (this.$route.path === '/')
    }
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-width: $cont-width;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: $cont-bg;
}
</style>
