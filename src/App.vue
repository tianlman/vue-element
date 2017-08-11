<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" theme="dark">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">进销存管理</span>
            </template>
            <el-menu-item-group>
              <span slot="title">基础资料</span>
              <el-menu-item index="1-1">计量单位</el-menu-item>
              <el-menu-item index="1-2">面料类别</el-menu-item>
              <el-menu-item index="1-3">面料资料</el-menu-item>
              <el-menu-item index="1-4">仓库管理</el-menu-item>
              <el-menu-item index="1-5">客户分类</el-menu-item>
              <el-menu-item index="1-6">客户资料</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>


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
