<template>
  <div class='letter'>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-letter"
      :router="router">
       <el-menu-item index="/home/letter/write" route='/home/letter/write'>
        <i class="el-icon-edit"></i>
        <span slot="title">写邮件</span>
      </el-menu-item>
       <el-menu-item index="/home/letter/inbox" route='/home/letter/inbox'>
        <i class="el-icon-message"></i>
        <span slot="title">收件箱</span>
      </el-menu-item>
      <el-menu-item index="/home/letter/star" route='/home/letter/star'>
        <i class="el-icon-star-off"></i>
        <span slot="title">标星邮件</span>
      </el-menu-item>
      <el-menu-item index="/home/letter/drafts" route='/home/letter/drafts'>
        <i class="el-icon-document"></i>
        <span slot="title">草稿箱</span>
      </el-menu-item>
      <el-menu-item index="/home/letter/sent" route='/home/letter/sent'>
        <i class="el-icon-upload2"></i>
        <span slot="title">已发送</span>
      </el-menu-item>
    </el-menu>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'letter',
    data () {
      return {
        router: true,
        defaultActive: '/home/letter/inbox'
      }
    },
    created () {
      const path = this.$route.path
      this.defaultActive = path
    },
    watch: {
      $route (newRoute) {
        const path = newRoute.path
        // console.log(path)
        this.defaultActive = path
      }
    }
  }
</script>
<style>
.letter {
  display: flex;
  height: 100%;
  width: 100%;
}
.letter .el-menu {
  flex: 0 0 132px;
  margin-top: 2px;
  padding-top: 20px;
}
.letter .el-menu-letter li{
  height: 35px;
  line-height: 35px;
}
.letter .main-content {
  /* flex: 1; */
  width: calc(100% - 132px);
  /* margin-top: 2px; */
  /* width: auto; */
}
</style>
