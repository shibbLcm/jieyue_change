<template>
  <div>
    <router-view/>
    <footer-guide/>
  </div>
</template>
<script>
  import FooterGuide from "../components/FooterGuide.vue"

  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>