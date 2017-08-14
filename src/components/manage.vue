
<template>
  <div>

  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters } from 'vuex'
  export default {
    data () {
      return {
        test:""
      }
    },
    computed: {
      ...mapGetters([
        'getTest'
      ])
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
          this.$http.get('../data.json').then(function(res){
          },function(){
            alert('请求失败处理'); //失败处理
          });
        }

    },
    components: {

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

