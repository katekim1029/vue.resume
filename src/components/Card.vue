<template>
  <div class="card">

    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <div class="card__info">
        <img :src="require(`@/assets/images/${ data.img }`)" width="400" height="400" class="card__img">
        <div class="card__detail">
          <strong class="card__title">{{ data.title }}</strong>
          <ul>
            <li>CLIENT : {{ data. client }}</li>
            <li>PERIOD : {{ data. period }}</li>
            <li>SKILLS : {{ data. skills }}</li>
            <li v-if="data.details">DETAILS : {{ data. details }}</li>
            <li v-if="data.url">LINK : <a :href="data.url" target="_blank">{{ data.url }}</a></li>
          </ul>
        </div>

      </div>
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
  position: relative;
  overflow: hidden;
  display: block;
  margin: 50px auto 0;
  width: 1000px;
  height: 500px;
  border: 1px solid #e0e0e0;
  text-align: center;

  &__info {
    position: relative;
    padding-left: 500px;
  }

  &__title {
    font-size: 36px;
    line-height: 80px;
  }

  &__img {
    position: absolute;
    top: 50px;
    left: 50px;
    border: 1px solid #e0e0e0;
  }

  &__detail {
    float: left;
    padding-top: 50px;
    text-align: left;

    li {
      font-size: 18px;
      line-height: 40px;
    }

    a {
      color: #939393;
      font-size: 14px;
      font-weight: 200;
    }
  }

}
</style>
