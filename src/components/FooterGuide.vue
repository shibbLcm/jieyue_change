<template>
  <div class="footer-guide-container">
    <router-link class="guide-link" :class="$route.path.indexOf('/layout/index')!==-1?' active':''" to="/layout/index/order">
      <i class="guide-icon guide-index"></i>
      <p class="guide-text">首页</p>
    </router-link>
    <router-link class="guide-link" :class="$route.path==='/layout/platformstrength'?' active':''" to="/layout/platformstrength">
      <i class="guide-icon guide-plat"></i>
      <p class="guide-text">平台实力</p>
    </router-link>
    <router-link class="guide-link" :class="$route.path==='/layout/cart'?' active':''" to="/layout/cart">
      <i class="guide-icon guide-cart"></i>
      <p class="guide-text">购物车</p>
    </router-link>
    <router-link class="guide-link" :class="$route.path==='/layout/faq'?' active':''" to="/layout/faq">
      <i class="guide-icon guide-faq"></i>
      <p class="guide-text">常见问题</p>
    </router-link>
    <router-link class="guide-link" :class="$route.path==='/layout/mine'?' active':''" to="/layout/mine">
      <i class="guide-icon guide-mine"></i>
      <p class="guide-text">我的</p>
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .footer-guide-container
    width 100%
    height ex(108)
    background-color: #fff;
    position fixed
    bottom 0
    left 0
    display flex
    text-align center
    .guide-link
      width 20%
      height 100%
      box-sizing border-box
      padding-top ex(15)
      .guide-icon
        display inline-block
        vertical-align middle
        background url(../../public/assets/img/footer_icon.png) no-repeat left top
        -webkit-background-size: cover
        background-size: cover
        width ex(39)
        height ex(42)
        margin-bottom ex(5)
        &.guide-index
          background-position: 0 0;
        &.guide-plat
          background-position: ex(-40) 0;
        &.guide-cart
          background-position: ex(-80) 0;
        &.guide-faq
          background-position: ex(-119) 0;
        &.guide-mine
          background-position: ex(-155) 0;
      &.active
        .guide-index
          background-position: ex(-196) 0;
        .guide-plat
          background-position: ex(-236) 0;
        .guide-cart
          background-position: ex(-276) 0;
        .guide-faq
          background-position: ex(-314) 0;
        .guide-mine
          background-position: ex(-351) 0;
      .guide-text
        font-size ex(17)
        color #585858
</style>