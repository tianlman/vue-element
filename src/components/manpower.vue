<template>
  <div>
    <!--<el-button>默认按钮</el-button>-->
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="text">文字按钮</el-button>-->
    <!--<my-component></my-component>-->
    <!--<my-component></my-component>-->
    <!--<p>test22222222222</p>-->
    manpower
    <!--<p v-model="test"></p>-->
    <!--<p>{{getTest}}</p>-->
  </div>
</template>
<script>
  import {mapState, mapActions,mapGetters } from 'vuex'
  export default {

    data () {
      return {
      }
    },
    computed:{
      ...mapGetters([
          'getTest'
      ])
  },
    mothods:{

    },
    components: {

    },
  }
</script>
