<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">EDUCATION</h3>
      <div class="edu">
        <ul class="edu__list">
          <li class="edu__item" v-for="item in data" :key="item.id">
            <strong>{{ item.title }}</strong>
            <i>{{ item.period }} {{ item.status }}</i>
            <a :href="item.url" class="edu__link" target="_blank">{{ item.url }}</a>
          </li>
        </ul>
      </div>
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
        board.fetch('education')
          .then(data => {
            this.data = data.reverse();
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

  &__item {
    margin-top: 50px;

    &:first-child {
      margin-top: 0;
    }

    strong {
      display: block;
      font-size: $font-size-xl;
      font-weight: $font-weight-regular;
    }

    i {
      display: block;
      font-size: $font-size-sm;
      font-weight: $font-weight-light;
    }
  }

  &__link {
    color: $gray-100;
    font-size: $font-size-sm;
    font-weight: $font-weight-light;
  }
}
</style>