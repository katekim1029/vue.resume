<template>
  <div class="board">
    Board Page
    <div>bid: {{ bid }}</div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  data() {
    return {
      bid: null
    }
  },
  created() {
    console.log(this.$route)
    this.bid = this.$route.params.bid
  }
}
</script>

<style lang="scss" scoped>
.board {
  width: $cont-width;
  margin: 0 auto;
  font-size: 56px;
  line-height: 200px;
  text-align: center;
}
</style>