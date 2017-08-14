<template>
  <div >
    {{title}}
    <!--<div v-if="title == 'b'">-->
      <!--{{title}}-->
    <!--</div>-->
    <!--<div v-if="title == 'a'">-->
      <!--{{title+title}}-->
    <!--</div>-->
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
        return this.$route.params.a
      },
    }

  }
</script>
