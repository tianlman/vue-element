<template>
  <div style="min-width: 800px;">
    <el-row style="height: 100%;" >
      <my-top></my-top>
      <el-col :span="4"">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"  router>
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
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{getTitle}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{getSubTitle}}</el-breadcrumb-item>
          <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
        </el-breadcrumb>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters } from 'vuex'
  export default {
    name: 'index',
    data() {
      return {
        isCollapse: false,
        title:'',
        subtitle:'',
      };
    },
    computed: {
      getTitle(){
        console.log(this.$route.params)
        var list= this.$store.state.newslist ;
//          console.log(list);
        if(this.$route.params.route){
          for(var i=0;i<list.length;i++){
//              console.log(list[i])
            if(this.$route.params.route== list[i]['routeName']){
              return this.title = list[i]['name'];
            }
          }
        }else {
          console.log(this.$route.path)
          var path = this.$route.path;
          var arrPath = path.split('/');
          for(var i=0;i<list.length;i++){
              console.log(arrPath)
            if(arrPath[1]== list[i]['routeName']){
              return this.title = list[i]['name'];
            }
          }
        }
      },
      getSubTitle(){
        return this.subtitle = this.$route.params.id;
      }

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getData(){
//        var params = this.$route.params.id;
//        console.log(params)

        this.$http.get('http://192.168.1.165:3000/indexData/').then(function(res){
//          console.log(res.data);
//          this.$store.state.newslist = res.data.list;
//          this.title = res.data.list[0].name
//          this.list = res.data;
        },function(){
          alert('请求失败处理'); //失败处理
        });
      }
    },
    created: function () {
      // `this` 指向 vm 实例
//      console.log(this.$route.params)
//      this.getData()
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
    width: 100%;
    min-height: 400px;
  }
</style>
