<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">INFO</h3>
      <div class="info">
        <div class="info__avatar">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="300" height="300" alt="">
        </div>
        <div class="info__text">
          EMAIL : <a href="mailto:kate-kim@nate.com" class="info__link">kate-kim@nate.com</a> <br>
          GITHUB : <a href="https://github.com/katekim1029" class="info__link" target="_blank">https://github.com/katekim1029</a>
        </div>
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
  &__avatar {
    margin-bottom: 20px;
  }

  &__text {
    font-size: $font-size-lg;
    line-height: 30px;
  }

  &__link {
    font-size: $font-size-lg;
    font-weight: $font-weight-light;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>