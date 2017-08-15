<template>
  <div id="app" style="min-width: 800px;">
          <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
//      isCollapse: false
    };
  },
  methods: {
//    handleOpen(key, keyPath) {
//      console.log(key, keyPath);
//    },
//    handleClose(key, keyPath) {
//      console.log(key, keyPath);
//    }
  }
}
</script>

<style lang="scss">

  @import './style/common';

</style>
