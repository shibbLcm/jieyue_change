<template>
  <div class="index-con">
    <header class="index-nav">
      <div class="index-nav-item" :class="$route.path.indexOf('/order')!==-1?' active':''" @click="$router.push('/layout/index/order')">订单</div>
      <div class="index-nav-item" :class="$route.path.indexOf('/member')!==-1?' active':''" @click="$router.push('/layout/index/member')">会员</div>
      <div class="index-nav-item" :class="$route.path.indexOf('/integral')!==-1?' active':''" @click="$router.push('/layout/index/integral')">积分</div>
      <div class="index-nav-item" :class="$route.path.indexOf('/logistics')!==-1?' active':''" @click="$router.push('/layout/index/logistics')">物流</div>
    </header>
    <router-view/>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .index-con
    .index-nav
      height ex(64)
      background-color: #2a2d2d;
      display flex
      justify-content center
      .index-nav-item
        width ex(100)
        height 100%
        margin-right ex(44)
        text-align center
        line-height ex(64)
        color #d6d6d6
        font-size ex(24)
        box-sizing border-box
        &.active
          color white
          border-bottom ex(5) solid #ff5579
        &:last-child
          margin-right 0
</style>