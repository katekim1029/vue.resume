<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import Navbar from '@/components/FakeNavbar.vue'
export default {
  name: 'App',
  components: { Navbar }
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
