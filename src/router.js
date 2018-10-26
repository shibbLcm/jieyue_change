import Vue from 'vue'
import Router from 'vue-router'
import Layout from "./views/Layout.vue"
import LayoutBase from "./views/LayoutBase.vue"
import Index from "./views/Index.vue"
import PlatformStrength from "./views/PlatformStrength.vue"
import Cart from "./views/Cart.vue"
import FAQ from "./views/FAQ.vue"
import Mine from "./views/Mine.vue"
import Order from "./views/Order.vue"
import Member from "./views/Member.vue"
import Integral from "./views/Integral.vue"
import Logistics from "./views/Logistics.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: 'index',
          name: 'index',
          component: Index,
          children:[
            {
              path: 'order',
              name: 'order',
              component: Order
            },
            {
              path: 'member',
              name: 'member',
              component: Member
            },
            {
              path: 'integral',
              name: 'integral',
              component: Integral
            },
            {
              path: 'logistics',
              name: 'logistics',
              component: Logistics
            }
          ]
        },
        {
          path: 'platformstrength',
          name: 'platformstrength',
          component: PlatformStrength
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'faq',
          name: 'faq',
          component: FAQ
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/layoutbase',
      name: 'layoutbase',
      component: LayoutBase
    },
    {
      path:"/",
      redirect:"/layout/index/order"
    }
  ]
})
