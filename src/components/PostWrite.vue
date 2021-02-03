<template>
  <div class="cont">
    <h3 class="title">Fake Board</h3>

    <form id="add-post-form" @submit.prevent="onSubmit">
      <div class="post-write">
        <label for="subject" class="post-write__lb">제목</label>
        <input type="text" id="subject" class="post-write__inp" v-model="input" ref="input" placeholder="제목을 입력하세요">
        <label for="detail" class="post-write__lb">내용</label>
        <textarea id="detail" class="post-write__ta" v-model="textarea" placeholder="내용을 입력하세요"></textarea>
      </div>

      <div class="btnset">
        <button type="button" class="btn-cancel" @click="cancel">CANCEL</button>
        <button type="submit" class="btn-board" :disabled="valid">POST</button>
      </div>
    </form>

  </div>
</template>

<script>
import { boardFake } from  '@/api'

export default {
  name: 'PostWrite',
  data() {
    return {
      input: '',
      textarea: ''
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  // watch: {
  //   input(v) {
  //     this.valid = v.trim().length > 0
  //   }
  // },
  computed: {
    valid() {
      return !this.input || !this.textarea
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
      boardFake.create({title: this.input, body: this.textarea, userId: 1})
        .then(() => {
          alert('등록되었습니다')
          this.$router.push('/posts').catch(()=>{})
        })
    },
    cancel() {
      this.$router.push('/posts').catch(()=>{})
    }
  }
}
</script>

<style lang="scss" scoped>
.post-write {
  width: 700px;
  margin: 0 auto;

  &__lb {
    display: none;
  }

  &__inp {
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: 1px solid $color-border;
    line-height: 40px;
  }

  &__ta {
    display: block;
    width: 100%;
    height: 200px;
    border: 1px solid $color-border;
    resize: none;
  }
}
</style>