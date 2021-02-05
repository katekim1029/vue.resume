<template>
  <div class="cont">
    <div class="loading" v-if="loading">
      <span class="loading__bar"></span>
    </div>

    <template v-else>
      <h3 class="title">SKILLS</h3>
      <div class="skills">
        <ul class="skills__list">
          <li class="skills__item" v-for="item in data" :key="item.id">
            <div class="skills__box">
              <span class="skills__img">
                <img :src="require(`@/assets/images/${ item.img }`)" width="150" height="150" alt="">
              </span>
              {{ item.level }}
            </div>
          </li>
        </ul>

        <div class="skills__note">
          인프런 [트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술] 2020년 수료<br>
          인프런 [실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발] 2019년 수료<br>
          패스트캠퍼스 [React 로 구현하는 웹 애플리케이션 제작 CAMP] 2018년 수료<br>
          개인 강좌 [EcmaScript2015+] 2018년 수료<br>
          개인 강좌 [ReactJS Study 기초부터 실전까지] 2018년 수료
        </div>
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
        board.fetch('skills')
          .then(data => {
            this.data = data
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
  &__list {
    overflow: hidden;
  }

  &__item {
    float: left;
    margin: 10px;
    width: 300px;
    height: 270px;
  }

  &__box {
    font-size: $font-size-lg;
    line-height: 40px;
  }

  &__img {
    position: relative;
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    font: 0/0 Arial;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid $color-border;
    }
  }

  &__note {
    font-size: $font-size-lg;
  }
}
</style>
