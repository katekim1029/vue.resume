<template>
  <div class="board">
    <h3 class="board__title">
      Board Page <span>bid: {{ bid }}</span>
    </h3>
    <div class="board__links">
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      <router-link :to="`/b/${bid}/c/3`">Card 3</router-link>
    </div>
    <router-view></router-view>
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
  text-align: center;

  &__title {
    font-size: 56px;
    line-height: 100px;
  }

  &__links {
    padding: 0 0 10px 0;

    a {
      margin: 0 10px;
    }
  }
}
</style>