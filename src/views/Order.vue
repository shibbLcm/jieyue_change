<template>
  <div class="order-con">
    <header class="top-logo">
      <img src="../../public/assets/img/miaosha_logo_01.jpg" alt="">
    </header>
    <section class="order-nav-list">
      <div class="order-nav-item">
        <i class="nav-icon-con yuan-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">29.8元</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con vip-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">VIP</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con skin-care-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">护肤</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con cosmetics-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">彩妆</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con mom-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">母婴</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con snack-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">小吃</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con health-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">养生</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con famous-things-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">名品</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con buying-agent-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">代购</p>
      </div>
      <div class="order-nav-item">
        <i class="nav-icon-con others-icon"><i class="main-icon"></i></i>
        <p class="nav-item-title ellipsis">其他</p>
      </div>
    </section>
    <section class="two-img">
      <div class="img-of-two-container left-img">
        <img src="../../public/assets/img/pub_benefit.jpg" alt="">
      </div>
      <div class="img-of-two-container right-img">
        <img src="../../public/assets/img/clearance.jpg" alt="">
      </div>
    </section>
    <div class="recommended-title">
      <i class="recommended-icon"></i>
      <span class="recommended-text">今日推荐</span>
    </div>
    <div class="recommended-swiper">
      <img src="../../public/assets/img/recommend.jpg" alt="">
    </div>
    <div class="selection-area-title">
      <i class="selection-icon"></i>
      <span class="selection-text">精选专区</span>
    </div>
    <div class="selection-area-list">
      <order-list-item v-for="i in 4" :key="i"/>
    </div>
  </div>
</template>
<script>
  import OrderListItem from "../components/OrderListItem.vue"

  export default {
    components:{
      OrderListItem
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .order-con
    background-color: #f1f9f9;
    padding-bottom ex(108)
    .top-logo
      font-size 0
      >img
        width 100%
    .order-nav-list
      height ex(318)
      box-sizing border-box
      padding ex(25) ex(16) 0
      display flex
      flex-wrap wrap
      background-color: #fff;
      margin-bottom ex(14)
      .order-nav-item
        width 20%
        height 50%
        box-sizing border-box
        .nav-icon-con
          width ex(76)
          height ex(76)
          font-size 0
          text-align center
          display block
          margin 0 auto ex(10)
          border-radius 50%
          .main-icon
            width ex(46)
            height 100%
            display inline-block
            vertical-align middle
            background: url("../../public/assets/img/nav_icon.png") no-repeat left top;
            -webkit-background-size: ex(424) ex(57)
            background-size: ex(424) ex(57)
            background-position-y:ex(12);
          &.yuan-icon
            background-color: #eab3da;
            .main-icon
              background-position-x: ex(5);
          &.vip-icon
            background-color: #f8967a;
            .main-icon
              background-position-x: ex(-42);
              background-position-y:ex(14);
          &.skin-care-icon
            background-color: #77d0e7;
            .main-icon
              background-position-x: ex(-87);
          &.cosmetics-icon
            background-color: #a9e08f;
            .main-icon
              background-position-x: ex(-126);
          &.mom-icon
            background-color: #46ccae;
            .main-icon
              background-position-x: ex(-165);
          &.snack-icon
            background-color: #bea4dc;
            .main-icon
              background-position-x: ex(-208);
          &.health-icon
            background-color: #fc9b9f;
            .main-icon
              background-position-x: ex(-251);
          &.famous-things-icon
            background-color: #ffcc6c;
            .main-icon
              background-position-x: ex(-289);
          &.buying-agent-icon
            background-color: #4fd4bc;
            .main-icon
              background-position-x: ex(-332);
          &.others-icon
            background-color: #ffb909;
            .main-icon
              background-position-x: ex(-380);
        .nav-item-title
          text-align center
          color #3f3f42
          margin 0 auto
          font-size ex(22)
    .two-img
      height ex(186)
      overflow hidden
      .img-of-two-container
        float left
        width 50%
        height 100%
        font-size 0
        >img
          width 100%
          height  100%
        &.right-img
          box-sizing border-box
          padding-left ex(32)
    .recommended-title
      height ex(80)
      box-sizing border-box
      padding ex(15) ex(22)
      .recommended-icon
        display inline-block
        vertical-align bottom
        margin-right ex(10)
        width ex(44)
        height ex(51)
        background: url("../../public/assets/img/title_icon.png") no-repeat left center;
        -webkit-background-size: cover
        background-size: cover
        background-position: 0 ex(5);
      .recommended-text
        font ex(24) "Adobe 黑体 Std R"
    .recommended-swiper
      height ex(297)
      >img
        height 100%
        width 100%
    .selection-area-title
      height ex(80)
      box-sizing border-box
      padding ex(15) ex(22)
      .selection-icon
        display inline-block
        vertical-align bottom
        margin-right ex(10)
        width ex(44)
        height ex(51)
        background: url("../../public/assets/img/title_icon.png") no-repeat left center;
        -webkit-background-size: cover
        background-size: cover
        background-position: ex(-46) ex(5);
      .selection-text
        font ex(24) "Adobe 黑体 Std R"
    .selection-area-list
      padding-left ex(20)
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