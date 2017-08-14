<template>
  <div style="min-width: 800px;">
    <el-row style="height: 100%;" >
      <my-header></my-header>
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark" router>
          <el-menu-item index="/manage" >
            <!--<i class="el-icon-menu"></i>-->
            <span slot="title">进销存储管理</span>
          </el-menu-item>
          <el-menu-item index="/manpower">
            <!--<i class="el-icon-menu"></i>-->
            <span slot="title">人力资源</span>
          </el-menu-item>
          <el-menu-item index="/finance">
            <!--<i class="el-icon-setting"></i>-->
            <span slot="title">财务管理</span>
          </el-menu-item>
          <el-menu-item index="/statement">
            <!--<i class="el-icon-menu"></i>-->
            <span slot="title">报表中心</span>
          </el-menu-item>
          <el-menu-item index="/synergy">
            <!--<i class="el-icon-menu"></i>-->
            <span slot="title">协同办公</span>
          </el-menu-item>
          <el-menu-item index="/maintenance">
            <!--<i class="el-icon-setting"></i>-->
            <span slot="title">系统维护</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'index',
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
