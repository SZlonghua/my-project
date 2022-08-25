<template>
  <!-- <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container> -->
  
  <div id="home" style="height: 100%">
    <v-header class="v-header"></v-header>
    <div class="content">
      <v-aside class="v-aside"></v-aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  // import { Header } from 'element-ui'
  import Header from './Header'
  import Aside from './Aside'
  export default {
    name: 'home',
    components: {
      'v-header': Header,
      'v-aside': Aside
    },
    methods: {
      resetState () {
        this.$store.dispatch('resetState')
      }
    }
  }
</script>
<style>
#home {
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  flex: 1;
  min-width: 687px;
}
#home .v-header {
  /* flex-shrink: 0; */
  height: 50px;
}
#home .content {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
#home .main {
  width: 100%;
}
</style>
