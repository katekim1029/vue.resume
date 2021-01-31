<template>
  <div class="goodbye">
    <img :src="require('@/assets/images/img_goodbye.jpg')" width="100%" height="100%">
  </div>
</template>

<script>
export default {
  name: 'Goodbye',
  mounted() {
    // setTimeout( () => {
    //   window.close()
    // }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.goodbye {
  font: 0/0 Arial;
}
</style>