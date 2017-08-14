
<template>
  <div>
    manage
    <a href="#/manage/a">m_1</a>
    <a href="#/manage/b">m_2</a>
    <a href="#/manage/3">m_3</a>
    <a href="#/manage/4">m_3</a>
    <a href="#/manage/5">m_4</a>
    <a href="#/manage/6">m_5</a>
    <a href="#/manage/7">m_6</a>
    <a href="#/manage/8">m_7</a>
    <!--<router-view></router-view>-->
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

