
<template>
  <div style="padding-left: 20px;">
    <div v-for="lists in list" style="margin: 10px 0">
      <h4 style="text-align: left">{{lists.name}}</h4>
      <div style="display: flex;flex-wrap: wrap">
        <span v-for="item in lists.list" style="width: 150px;margin-top: 5px;"><router-link :to="routeId+'/'+item.routeId">{{item.name}}</router-link></span>
        <!--<span v-for="item in lists.list" style="width: 150px;margin-top: 5px;"><a :href="'#'+routeId+'/'+item.routeId">{{item.name + routeId + item.routeId}}</a></span>-->
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters } from 'vuex'
  export default {
    data () {
      return {
        test:"",
        title:"123",
        list:[],
        routeId:""
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
      getData(){
        var params = this.$route.params.route;
        this.routeId = params;
        console.log(this.$store.state.routeDate[params]);
        if(!this.$store.state.routeDate[params]){
          this.$http.get('http://192.168.1.165:3000/indexData/'+params).then(function(res){
            //          console.log(res.data);
            this.list = res.data;
            //          console.log(this.list[0].name)
            //先保存到vuex
            this.$store.state.routeDate[params] = this.list;
            //          console.log(this.$store.state.newslist)
            //          console.log(this.$store.state.routeDate)
          },function(){
            alert('请求失败处理'); //失败处理
          });
        }else{
//            复制给list
          this.list = this.$store.state.routeDate[params];
        }
      },
    },
    components: {

    },
    created(){
        this.getData();
    },

    watch: {
      //监听路由改变刷新数据
      '$route':"getData"
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

