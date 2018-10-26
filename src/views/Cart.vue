<template>
  <div class="cart-con">
    <div v-if="cartGoodsList.length<=0" class="empty-cart-con">
      <div class="empty-list-interface">
        <svg class="icon icon-cart-empty" aria-hidden="true">
          <use xlink:href="#icon-cart2e"></use>
        </svg>
        <p class="cart-img-title">购物车空空如也，快来挑好货呗~</p>
        <p class="cart-black-button">逛逛今日秒杀</p>
      </div>
      <two-lines title="你可能还想买"/>
      <div class="may-buy-list">
        <order-list-item v-for="i in 2" :key="i"/>
      </div>
    </div>
    <div class="goods-cart-con" v-else>
      <div class="cart-goods-list">
        <div class="cart-goods-item" v-for="(good , index) in cartGoodsList" :key="index">
          <span @click="good.selected=!good.selected" class="select-icon" :class="good.selected?' selected':''"></span>
          <img class="good-img" :src="good.img" alt=""/>
          <div class="cart-goods-info">
            <p class="name ellipsis">{{good.name}}</p>
            <p class="price ellipsis">&yen;{{good.price}}</p>
            <div class="counter ellipsis">
              <span class="sm-box minus" @click="cartGoodHandler('minus',index)">-</span>
              <span class="sm-box count">{{good.count}}</span>
              <span class="sm-box add" @click="cartGoodHandler('add',index)">+</span>
            </div>
          </div>
          <svg @click="cartGoodHandler('delete',index)" class="icon delete-icon" aria-hidden="true">
            <use xlink:href="#icon-trash-o"></use>
          </svg>
        </div>
      </div>
      <div class="checkout-footer">
        <p class="checkout-info">
          共&nbsp;{{totalCount}}&nbsp;件&nbsp;总计：<span class="totalPrice">&yen;{{totalPrice}}</span>
        </p>
        <p class="checkout-button">结算</p>
      </div>
    </div>
  </div>
</template>
<script>
  import TwoLines from "../components/TwoLines.vue"
  import OrderListItem from "../components/OrderListItem.vue"

  export default {
    data(){
      return {
        cartGoodsList:[
          {
            selected:true,
            img:"/assets/img/piku_05.png",
            name:"男士雪莲贴",
            price:"168.00",
            count: 2
          },
          {
            selected:true,
            img:"/assets/img/piku_05.png",
            name:"女士雪莲贴",
            price:"69.00",
            count: 3
          },
          {
            selected:true,
            img:"/assets/img/piku_05.png",
            name:"卫生巾",
            price:"28.00",
            count: 5
          }
        ]
      }
    },
    computed:{
      totalCount(){
        return this.cartGoodsList.reduce((prev,current)=>current.selected?prev+current.count:prev+0,0)
      },
      totalPrice(){
        return this.cartGoodsList.reduce((prev,current)=>current.selected?prev+current.count*current.price:prev+0,0)
      }
    },
    methods:{
      cartGoodHandler(type,index){
        let cartGoodsList=this.cartGoodsList
        let good=this.cartGoodsList[index]
        switch (type){
          case "minus":
            good.count>1?good.count--:cartGoodsList.splice(index,1)
            return
          case "add":
            good.count++
            return
          case "delete":
            cartGoodsList.splice(index,1)
            return
        }
      }
    },
    components:{
      TwoLines,
      OrderListItem
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .cart-con
    background-color: #f1f9f9;
    .empty-cart-con
      box-sizing border-box
      padding-bottom ex(108)
      .empty-list-interface
        background-color: #fff;
        padding ex(100)
        text-align center
        .icon-cart-empty
          font-size: ex(130)
          color: #bfbfbf;
          margin-bottom: ex(20)
        .cart-img-title
          height: ex(20);
          line-height: ex(20);
          color: rgba(157, 157, 157, 1);
          font-size: ex(30);
          margin-bottom: ex(20);
        .cart-black-button
          width: ex(260);
          height: ex(50);
          display inline-block
          line-height: ex(50);
          border-radius: ex(15);
          background-color: #ff5579;
          color: white;
          font-size: ex(30);
      .may-buy-list
        padding-left ex(20)
    .goods-cart-con
      height 100vh
      position relative
      box-sizing border-box
      padding-bottom ex(108)
      .cart-goods-list
        .cart-goods-item
          background-color: #fff;
          padding ex(50) ex(20)
          height ex(130)
          border-bottom 1px solid #e4e4e4
          display flex
          align-items center
          .select-icon
            width ex(35)
            height ex(35)
            border-radius 50%
            box-sizing border-box
            border 1px solid #e4e4e4
            &.selected
              border none
              background: url("../../public/assets/img/icn_jy_txsq_xz.png") no-repeat left center;
              -webkit-background-size: cover
              background-size: cover
          .good-img
            width ex(130)
            height 100%
            margin 0 ex(10)
          .cart-goods-info
            flex-grow 1
            flex-shrink 1
            height ex(130)
            display flex
            flex-direction column
            justify-content space-between
            .price
              color red
            .counter
              .sm-box
                display inline-block
                width ex(30)
                height ex(30)
                margin-right ex(10)
                line-height ex(30)
                text-align center
                border-radius ex(8)
                border 1px solid #ababab
                &.minus
                  color #ababab
                &.add
                  color white
                  border 1px solid #ff5579
                  background-color: #ff5579;
          .delete-icon
            font-size ex(50)
            color #e4e4e4
            margin-left ex(10)
      .checkout-footer
        position absolute
        bottom ex(108)
        left 0
        height ex(100)
        z-index 10
        line-height ex(100)
        width 100%
        box-shadow: 0 ex(5) ex(5) #eee
        .checkout-info
          background-color: #fff;
          display inline-block
          width 70%
          height 100%
          .totalPrice
            color red
        .checkout-button
          display inline-block
          width 30%
          height 100%
          color white
          text-align center
          background-color: #ff5579;
</style>