<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
// import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    } 
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // stora,ge.clear('age')
  },
  methods: {
    getUser () {
      this.axios.get('user').then((res) => {
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        console.log(res)
        this.$store.dispatch('saveCount',res);
      })
    }
  }
}

</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>