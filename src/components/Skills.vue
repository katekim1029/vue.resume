<template>
  <div class="skills">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="skills__title">SKILLS</h3>
      <ul class="skills__list">
        <li v-for="item in data" :key="item.id">
          <div>
            <span class="img" :style="{backgroundImage: `url('${item.img}')`}"></span>
            {{ item.level }}
          </div>
        </li>
      </ul>
    </template>

  </div>
</template>

<script>
import {board} from "@/api";

export default {
  name: 'Skills',
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
            this.data = data.skills
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
.skills {
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
    overflow: hidden;

    li {
      float: left;
      margin: 10px;
      width: 300px;
      height: 270px;
    }

    div {
      font-size: 30px;
      line-height: 100px;
    }

    .img {
      display: block;
      width: 150px;
      height: 150px;
      margin: 0 auto;
      border: 1px solid #e0e0e0;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }
  }
}
</style>