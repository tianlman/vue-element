
<template>
  <div>
    <el-button>默认按钮</el-button>
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="text">文字按钮</el-button>-->
    <!--<my-component></my-component>-->
    <my-component></my-component>
    <p>test{{$store.state.name}}</p>
    <span class="span" @click = a>button</span>
    <span class="span" @click = get>ajax</span>
    <input type="text" v-model="test">
    <span @click="setText2">aaa</span>
    <div class="aa"><span class="bb">{{getTest}}</span></div>
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

