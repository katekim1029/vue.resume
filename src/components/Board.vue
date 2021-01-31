<template>
  <div class="board">

    <div class="loading" v-if="loading">
      Loading Board...
    </div>

    <template v-else>
      <h3 class="board__title">
        Board Page <span>bid: {{ bid }}</span>
      </h3>
      <ul class="board__links">
        <li v-for="item in data" :key="item.id">
          <router-link :to="`/b/${bid}/c/${item.id}`">{{ item.title }}</router-link></li>
      </ul>
      <router-view></router-view>
    </template>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Board',
  data() {
    return {
      data: null,
      loading: false,
      bid: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      this.bid = this.$route.params.bid
      setTimeout(() => {
        axios.get(process.env.BASE_URL+'data/data.json')
          .then( res => {
            this.data = res.data.experience
          })
          .catch(res => {
            console.log(res);
          })
          .finally(() => {
            this.loading = false
          })
      }, 500);
    }
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

    li {
      display: inline-block;
    }
    a {
      margin: 0 10px;
    }
  }
}
</style>