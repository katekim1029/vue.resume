<template>
  <div class="card" >

    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <p>
        <span class="card__title"> {{ data.title }} </span>
        <span v-if="data.url"><a :href="data.url" target="_blank">바로가기</a></span>
      </p>
      <img :src="require(`@/assets/images/${ data.img }`)" width="400" height="400" class="card__img">
    </template>

  </div>
</template>

<script>
import { board } from '@/api'

export default {
  name: 'Card',
  data() {
    return {
      data: null,
      loading: false,
      cid: null,
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
      this.cid = this.$route.params.cid
      this.loading = true
      setTimeout( () => {
        board.fetch()
          .then(data => {
            this.data = data.experience.find( elem => elem.id === this.cid)
            console.log(this.data)
          })
          .finally(() => {
            this.loading = false
          })
        }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin: 50px auto 0;
  width: 500px;
  height: 500px;
  border: 1px solid #e0e0e0;
  text-align: center;

  &__title {
    font-size: 36px;
    line-height: 80px;
  }

  a {
    color: #939393;
    font-size: 14px;
  }
}
</style>