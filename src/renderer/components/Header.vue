<template>
  <header style="-webkit-app-region: drag">
    <div>
      <img class="gmail" src="../assets/logo-gmail.png"/>
    </div>
    <div class="logo">
      <span>Vmail</span>
    </div>
    <div class="account">
      <span>{{user.email}}</span>
    </div>
    <div class="toolbar" >
       <span @click='minimize'>
         <img style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" src="../assets/min.png"/>
       </span>
       <span @click='full'>
         <img v-if='isFullScreen' style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" src="../assets/max.png"/>
         <img v-else style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" src="../assets/max-fullscreen.png"/>
       </span>
       <span @click='close'>
         <img style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" src="../assets/shutdown.png"/>
       </span>
    </div>
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  const { remote } = require('electron')
  export default {
    name: 'v-header',
    data () {
      return {
        isFullScreen: false
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      close () {
        remote.getCurrentWindow().close()
        remote.app.close()
      },
      minimize () {
        remote.getCurrentWindow().minimize()
      },
      full () {
        const browserWindow = remote.getCurrentWindow()
        if (browserWindow.isMaximized()) {
          browserWindow.unmaximize()
          this.isFullScreen = false
        } else {
          browserWindow.maximize()
          this.isFullScreen = true
        }
      }
    }
  }
</script>
<style>
header {
  height: 50px;
  width: 100%;
  min-width: 687px;
  /* background-color: #424b54; */
  height: 50px;
  color: #000;
  box-shadow: 0 1px 0 #d2d2d2;
  line-height: 50px;
}
header div {
  display: inline !important;
}

head .account {
  padding-left: 11px;
  line-height: 50px;
}

header .logo {
  font-size: 29px;
  padding-left: 11px;
  width: 100px;
}
header .gmail {
  height: 40px;
  width: auto;
  vertical-align: middle;
  margin-left: 12px;
  /* margin-right: 10px; */
  margin-top: -10px !important;
}
header .refresh span {
  margin: auto 10px;
}
header .refresh span:active {
  color: #b6d1ec;
}
header .refresh span.active{
  color: #b6d1ec;
  animation: spin 800ms infinite linear;
}
@keyframes spin {
  0%   { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

header .toolbar {
  user-select: none;
  float: right;
  /* white-space:nowrap;
  position: absolute;
  right: 10px; */
}
header .toolbar span {
  padding: 0 5px;
}
header .toolbar span:hover {
  background-color: #d8e7f7;
}
header .toolbar span:active {
  background-color: #e6eff9;
}
</style>
