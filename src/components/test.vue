
<template>
  <div>
    <el-button>默认按钮</el-button>
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="text">文字按钮</el-button>-->
    <!--<my-component></my-component>-->
    <my-component></my-component>
    <p>test{{$store.state.name}}</p>
    <span class="span" @click = a>button</span>
    <!--<span class="span" @click = add>ajax</span>-->
    <input type="text" v-model="test">
    <span @click="setText2">aaa</span>
    <div>{{getTest}}</div>
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

    },
    components: {

    }

  }
</script>
<style>
  .span{
    width: 50px;
    height: 16px;
    line-height:16px;
    background: #ccc;
    color: #red;
    cursor: pointer;
  }
</style>

