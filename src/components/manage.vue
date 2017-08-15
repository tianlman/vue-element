
<template>
  <div>
    <!--manage-->
    <!--<el-breadcrumb separator="/">-->
      <!--<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>{{getUrl}}</el-breadcrumb-item>-->
      <!--&lt;!&ndash;<el-breadcrumb-item>活动列表</el-breadcrumb-item>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-breadcrumb-item>活动详情</el-breadcrumb-item>&ndash;&gt;-->
    <!--</el-breadcrumb>-->

    <a href="#/manage/1" >m_1</a>
    <a href="#/manage/2">m_2</a>
    <span @click="get">111</span>
    <ul>
      <li v-for="item in this.$store.state.newslist">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters } from 'vuex'
  export default {
    data () {
      return {
        test:"",
        title:"123",
        list:[]
      }
    },
    computed: {
      ...mapGetters([
        'getTest'
      ]),
//      getUrl(){
//        console.log(this.$route.params.id)
//          var list= this.$store.state.newslist ;
////          console.log(list);
//
//          for(var i=0;i<list.length;i++){
////              console.log(list[i])
//            if(this.$route.params.id == list[i]['routeName']){
//              return this.title = list[i]['name'];
//            }
//        }
//
//      }

  },
    methods:{
        ...mapActions([
            'a'
      ]),
        setText2(){
          this.$store.state.test = this.test;
      },
        get:function(){
          //发送get请求
          this.$http.get('http://192.168.1.165:3000/indexData').then(function(res){
              console.log(res)
          },function(){
            alert('请求失败处理'); //失败处理
          });
        },
      getData(){
        var params = 'invoicing';
        this.$http.get('http://192.168.1.165:3000/indexData').then(function(res){
          console.log(res.data);
          this.list = res.data;
          this.$store.state.newslist = res.data.list;
          console.log(this.$store.state.newslist)
        },function(){
          alert('请求失败处理'); //失败处理
        });
      },

    },
    components: {

    },
    created(){
        this.getData();
        console.log()
    }

  }
</script>
<style lang="scss" scoped="" type="text/css">
  .span{
    width: 50px;
    height: 16px;
    line-height:16px;
    background: #ccc;
    color: #red;
    cursor: pointer;
  }
  .aa{
    width: 200px;
    .bb{
      color: red;
    }
  }
</style>

