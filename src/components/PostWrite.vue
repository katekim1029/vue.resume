<template>
  <Modal class="modal-write">

    <div slot="body">

      <form id="add-post-form" @submit.prevent="onSubmit">
        <div class="post-write">
          <label for="subject" class="post-write__lb">제목</label>
          <input type="text" id="subject" class="post-write__inp" v-model="input" ref="input" placeholder="제목을 입력하세요">
          <label for="detail" class="post-write__lb">내용</label>
          <textarea id="detail" class="post-write__ta" v-model="textarea" placeholder="내용을 입력하세요"></textarea>
        </div>

        <div class="btnset">
          <button type="button" class="btn-cancel" @click="SET_IS_WRITE_POST(false)">취소</button>
          <button type="submit" class="btn-board" :disabled="valid">등록</button>
        </div>
      </form>

      <button class="btn-modal" @click="SET_IS_WRITE_POST(false)">&times;</button>
    </div>

  </Modal>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  name: 'PostWrite',
  components: {
    Modal
  },
  data() {
    return {
      input: '',
      textarea: ''
    }
  },
  mounted() {
    // this.$refs.input.focus()
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
    ...mapMutations([
      'SET_IS_WRITE_POST'
    ]),
    ...mapActions([
      'ADD_POST',
      'FETCH_POSTS'
    ]),
    onSubmit() {
      this.ADD_POST({title: this.input, body: this.textarea, userId: 1}).then(() => {
        alert('등록되었습니다!')
        this.FETCH_POSTS()
        this.SET_IS_WRITE_POST(false)
        this.$emit('submit')
      })
    }
  }
}
</script>

<style lang="scss">
.modal-mask.modal-write {
  transition: all 0s ease 0s;

  .modal-container {
    position: relative;
    width: 800px;
    padding: 100px 50px 50px;
    font-family: $font-family-base;
    transition: all 0s ease 0s;
  }
  .modal-body {
    margin: 0;
  }
  .modal-header, .modal-footer {
    display: none;
  }
}

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