<template>
  <div class="card" >

    <div class="loading" v-if="loading">
      Loading Card...
    </div>

    <template v-else>
      Card Layer
      <span>cid: {{ cid }}</span>
      <div>
        <span> {{ data.title }} </span>
        <span v-if="data.url"><a :href="data.url" target="_blank">바로가기</a></span>
      </div>
      <div>
        <img :src="require(`@/assets/images/${ data.img }`)" width="300" height="300">
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'

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
        axios.get(process.env.BASE_URL+'data/data.json')
          .then( res => {
            this.data = res.data.experience.find( elem => elem.id === this.cid)
            console.log(this.data)
          })
          .catch(res => {
            console.log(res);
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
  display: block;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: rgba(0,0,0,0.5);
  font-size: 18px;
  text-align: center;
}
</style>