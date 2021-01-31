<template>
  <div class="info">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="info__title">INFO</h3>
      <div class="info__avatar">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="300" height="300">
      </div>
      <div class="info__text">
        EMAIL : <a href="mailto:kate-kim@nate.com">kate-kim@nate.com</a> <br>
        GITHUB : <a href="https://github.com/katekim1029" target="_blank">https://github.com/katekim1029</a>
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

  &__avatar {
    margin-bottom: 20px;
  }

  &__text {
    font-size: 18px;
    line-height: 30px;

    a {
      font-size: 18px;
      font-weight: 200;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>