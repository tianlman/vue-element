
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
  import { getrouteData } from '@/api/getData'
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
      getData(){
        var params = this.$route.params.route;
        this.routeId = params;
        if(!this.$store.state.routeDate[params]){
          getrouteData(params).then(res=>{
            this.list = res.data;
            //先保存到vuex
            this.$store.state.routeDate[params] = this.list;
          }).catch(
            err=>{
              alert('请求失败处理'); //失败处理
            }
          );
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

