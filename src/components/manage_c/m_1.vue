<template>
  <div >
    {{title}}
    <div v-if="title == '1'">
      {{title}}
      <span @click="getData">11111</span>
    </div>
    <div v-if="title == '2'">
      {{title+title}}
    </div>
  </div>

</template>
<script>
  export default{
    name:"a123",
    data(){
      return{

      }
    },
    computed:{
      title:function () {
        return this.$route.params.id
      },
    },
    methods:{
      getData:function(){
        //发送get请求
        this.$http.get('http://192.168.1.165:3000/indexData').then(function(res){
          console.log(res)
        },function(){
          alert('请求失败处理'); //失败处理
        });
      }
    },
    created: function(){
      // `this` 指向 vm 实例
      console.log(this.$route.params)
//      vm.getData()
    }
  }
</script>
