<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <router-link class="btn-fake" to="/posts" v-if="isFakeBtn">B</router-link>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
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

.btn-fake {
  position: fixed;
  left: 50%;
  bottom: 10px;
  display: block;
  width: 80px;
  height: 80px;
  margin-left: 550px;
  background: $color-300;
  border-radius: 50%;
  color: $white;
  font-size: $font-size-xl;
  text-align: center;
  text-decoration: none;
  line-height: 80px;
}
</style>
