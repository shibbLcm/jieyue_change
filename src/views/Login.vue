<template>
  <div class="login-con">
    <img src="../../public/assets/img/login_logo_01.png" class="login-logo" alt="">
    <form class="login-form">
      <div class="input-con">
        <i class="input-icon user-icon"></i>
        <input type="text" name="phone" placeholder="输入手机号">
      </div>
      <div class="input-con">
        <i class="input-icon pwd-icon"></i>
        <input type="password" name="password" placeholder="请输入密码">
      </div>
      <button class="login-button">登录</button>
    </form>
    <p class="under-login-button">
      <span @click="$router.push('/layoutbase/retrievepwd')">找回密码</span>
      <span @click="$router.push('/layoutbase/register')">注册账号</span>
    </p>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .login-con
    text-align center
    .login-logo
      height ex(133)
      width ex(133)
      margin-top ex(306)
    .login-form
      margin-top ex(162)
      margin-bottom ex(42)
      .input-con
        width ex(438)
        height ex(60)
        margin auto
        border 1px solid #ddd
        border-radius ex(30)
        margin-bottom ex(21)
        .input-icon
          margin-left ex(24)
          margin-right ex(17)
          display inline-block
          vertical-align middle
          height ex(38)
          width ex(28)
          background: url("../../public/assets/img/input_icon_01.png") no-repeat left top;
          -webkit-background-size: cover
          background-size: cover
          &.pwd-icon
            background-position-x:ex(-26);
        >input
          font-size ex(30)
          height 100%
          background none
          border 0
          outline none
          &::-webkit-input-placeholder
            font-size ex(30)
            color #999
      .login-button
        margin-top ex(48)
        border 1px solid transparent
        outline none
        width ex(438)
        height ex(60)
        border-radius ex(30)
        line-height ex(60)
        color white
        text-align center
        font-size ex(36)
        background-color: #fe5678;
    .under-login-button
      text-align center
      font-size ex(30)
      color #999
      >span
        margin-right ex(153)
        &:last-child
          margin-right 0
</style>