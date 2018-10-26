<template>
  <div class="selection-area-item">
    <img class="good-logo" src="../../public/assets/img/piku_05.png" alt="">
    <div class="good-info">
      <p class="good-brand ellipsis">洁玥<sup>&reg;</sup></p>
      <p class="good-name ellipsis">纳米银呼吸塑型皮裤（S码）</p>
      <p class="good-descip ellipsis">适合120斤以内人群（60kg）</p>
      <span class="good-right ellipsis">全场包邮</span>
      <p class="now-price ellipsis">&yen;49.80</p>
      <div class="old-price-and-add-icon">
        <span class="old-price ellipsis"><del>零售价：&yen;168.00</del></span>
        <i class="add-icon"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .selection-area-item
    /*height ex(642)*/
    width 50%
    font-size 0
    display inline-block
    padding-right ex(20)
    margin-bottom ex(20)
    box-sizing border-box
    .good-logo
      width 100%
      height ex(350)
    .good-info
      /*height ex(294)*/
      box-sizing border-box
      background-color: #fff;
      padding ex(21)
      .good-brand
        font-size ex(24)
        padding-top ex(5)
        color #3e3a39
      .good-name
        font-size ex(24)
        color #3e3a39
      .good-descip
        font-size ex(16)
        color #7d7d7d
      .good-right
        font-size ex(18)
        color #fff
        border-radius ex(22)
        display inline-block
        padding ex(6) ex(10)
        margin ex(10) 0
        background-color: #ff5579;
      .now-price
        font-size ex(35)
        color #ff5579
      .old-price-and-add-icon
        display flex
        justify-content space-between
        align-items center
        .old-price
          font-size ex(24)
          color #989898
        .add-icon
          width ex(42)
          height ex(42)
          background: url("../../public/assets/img/add_cart.png") no-repeat top left;
          -webkit-background-size: cover
          background-size: cover
</style>