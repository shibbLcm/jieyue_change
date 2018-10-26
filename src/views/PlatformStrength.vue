<template>
  <div class="platform-strength-con">
    <img class="platform-strength-logo" src="../../public/assets/img/platformPower.jpg" alt="">
    <section class="platform-text-con">
      <p class="intro-text-title"><span class="strong">企业简介</span>/Enterprise profile</p>
      <p class="intro-text-content">金旺集团集产品研发、设计、生产、市场销售于一体，是一家专业卫生用品生产企业。多年来集团以“质量为本，创新发展”为理念，其卓越的产品质量，深受国内外广大顾客的青睐。</p>
    </section>
    <section class="platform-text-con">
      <p class="intro-text-title"><span class="strong">荣誉资质</span>/Honours Qualification</p>
      <p class="intro-text-content">金旺已通过ISO9001质量体系认证，先后获得“CCTV央视宣传品牌”、“全国生产质量公证十佳品牌”、“中国3.15诚信企业”、“中国著名品牌”等多项殊荣。</p>
    </section>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .platform-strength-con
    background-color: #f1f9f9;
    height 100vh
    box-sizing border-box
    padding-bottom ex(108)
    .platform-strength-logo
      width 100%
      margin-bottom ex(10)
    .platform-text-con
      padding ex(20) ex(15)
      background-color: rgba(255,255,255,.8);
      margin-bottom ex(20)
      .intro-text-title
        margin-bottom ex(20)
        .strong
          color #ff5579
          font-size ex(30)
          font-weight bold
</style>