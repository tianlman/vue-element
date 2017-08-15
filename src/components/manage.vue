
<template>
  <div>
      <h1></h1>
      <span v-for="item in this.$store.state.newslist"><router-link to="/manage/1">{{item.name}}</router-link></span>
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
        var params = this.$route.params.route;
        this.$http.get('http://192.168.1.165:3000/indexData/'+params).then(function(res){
          console.log(res.data);
          this.list = res.data;
          console.log(this.list)
//          this.$store.state.newslist = res.data.list;
//          console.log(this.$store.state.newslist)
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

