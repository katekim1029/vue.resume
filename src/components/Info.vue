<template>
  <div class="info">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="info__title">INFO</h3>
      <div class="info__text">
        EMAIL : kate-kim@nate.com
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      data: null,
      loading: false,
    }
  },
  created() {
    this.loading = true
    this.bid = this.$route.params.bid
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
.info {
  width: $cont-width;
  margin: 0 auto;
  padding-bottom: 100px;
  text-align: center;

  &__title {
    padding-top: 30px;
    padding-bottom: 23px;
    font-size: 56px;
    font-weight: bold;
    line-height: 100px;
  }

  &__text {
    font-size: 18px;
  }
}
</style>