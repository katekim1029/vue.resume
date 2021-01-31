<template>
  <div class="edu">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="edu__title">EDUCATION</h3>
      <ul class="edu__list">
        <li v-for="item in data" :key="item.id">
          <strong>{{ item.title }}</strong>
          <a :href="item.url" target="_blank">{{ item.url }}</a>
        </li>
      </ul>
    </template>

  </div>
</template>

<script>
import {board} from "@/api";

export default {
  name: 'Education',
  data() {
    return {
      data: null,
      loading: false,
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
        board.fetch()
          .then(data => {
            this.data = data.education.reverse();
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
.edu {
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

  &__list {
    li {
      margin-top: 50px;

      &:first-child {
        margin-top: 0;
      }
    }

    strong {
      display: block;
      font-size: 30px;
    }

    a {
      color: #939393;
      font-size: 14px;
    }
  }
}
</style>