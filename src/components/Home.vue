<template>
  <div class="home">
    <div class="all-boards">
      <ul class="all-boards__list">
        <li class="all-boards__item">
          <router-link to="/b/1" class="info"><em class="text">INFO</em></router-link>
          <!-- Personal Info | About Me -->
        </li>
        <li class="all-boards__item">
          <router-link to="/b/2" class="skills"><em class="text">SKILLS</em></router-link>
        </li>
        <li class="all-boards__item">
          <router-link to="/b/3" class="exp"><em class="text">EXPERIENCE</em></router-link>
        </li>
        <li class="all-boards__item">
          <router-link to="/b/4" class="edu"><em class="text">EDUCATION</em></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  width: $cont-width;
  margin: 0 auto;
  font-size: 56px;
  line-height: 200px;
  text-align: center;
}

.all-boards {
  padding: 20px;

  &__item {
    width: 100%;
    padding-top: 20px;

    &:first-child {
      padding-top: 0;
    }

    a {
      position: relative;
      display: block;
      width: 100%;
      height: 155px;
      background-color: #000000;
      text-decoration: none;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(36,32,29,0.7);
      }
    }

    .text {
      position: relative;
      color: #ffffff;
      font-size: 36px;
      line-height: 155px;
    }
  }

  .info {
    background: url('https://cdn.pixabay.com/photo/2015/01/11/02/15/mailbox-595854_960_720.jpg') no-repeat 50%;
    background-size: cover;
  }

  .skills {
    background: url('https://cdn.pixabay.com/photo/2017/01/06/11/01/tool-1957451_960_720.jpg') no-repeat 50% 30%;
    background-size: cover;
  }

  .exp {
    background: url('https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg') no-repeat 50%;
    background-size: cover;
  }

  .edu {
    background: url('https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg') no-repeat 50%;
    background-size: cover;
  }
}
</style>
