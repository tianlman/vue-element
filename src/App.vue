<template>
  <div id="app" style="min-width: 800px;">
          <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.rightAera {
  float: left;
  text-align: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 200px;
  min-height: 400px;
}
</style>
