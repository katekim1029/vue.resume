<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">Fake Board</h3>

      <div class="post">
        <strong class="post__tit">{{ data.title }}</strong>
        <p class="post__cnt">{{ data.body }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import { boardFake } from  '@/api'

export default {
  name: 'PostView',
  data() {
    return {
      data: null,
      loading: false,
      pid: null,
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      this.pid = this.$route.params.pid
      boardFake.fetch(this.pid)
        .then(data => {
          this.data = data
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 700px;
  margin: 0 auto;

  &__tit {
    display: block;
    font-weight: $font-weight-light;
    font-size: $font-size-xl;
    line-height: 1.1;
  }

  &__cnt {
    padding-top: 30px;
    color: $gray-100;
    font-weight: $font-weight-light;
    font-size: $font-size-lg;
  }
}
</style>