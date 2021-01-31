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
      <div>
        인프런 [트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술] 2020년 수료<br>
        인프런 [실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발] 2019년 수료<br>
        패스트캠퍼스 [React 로 구현하는 웹 애플리케이션 제작 CAMP] 2018년 수료<br>
        개인 강좌 [EcmaScript2015+] 2018년 수료<br>
        개인 강좌 [ReactJS Study 기초부터 실전까지] 2018년 수료
      </div>
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