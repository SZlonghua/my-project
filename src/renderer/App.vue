<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // import electron from 'electron'
  
  export default {
    name: 'my-project',
    beforeCreate: function () {
      // this.$store.dispatch('init', electron.remote)
      // this.$router.beforeEach((to, from, next) => {
      //   console.log('router to ' + to.path)
      //   let isAuthenticated = store.getters.isAuthenticated
      //   console.log('isAuthenticated: ' + isAuthenticated)
      //   if (to.path !== '/login' && !isAuthenticated) {
      //     next({ path: '/login' })
      //   } else next()
      // })
    },
    created: function () {
      // console.log(electron.remote.app)
      // this.$router.beforeEach(async (to, from) => {
      // // let isAuthenticated = !isAuthenticated
      // // const isAuthenticated = false
      // // if (
      // //   // 检查用户是否已登录
      // //   !isAuthenticated &&
      // //   // ❗️ 避免无限重定向
      // //   to.name !== 'Login'
      // // ) {
      // //   // 将用户重定向到登录页面
      // //   return { name: 'Login' }
      // // }
      //   return '/login'
      // })
    },
    beforeDestroy: function () {
      // this.$store.dispatch('resetState')
    }
  }
</script>

<style>
  /* CSS */
</style>
