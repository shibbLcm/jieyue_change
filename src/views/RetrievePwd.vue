<template>
  <div>
    <div class="grayBD titleBD">
      <form id="frm">
        <div class="pdBox">
          <input class="bigIpt" type="number" name="phone" id="phone" placeholder="请输入手机号"/>
        </div>
        <div class="check_error" id="verify_phone"></div>

        <div class="pdBox flexb">
          <input class="minIpt" type="text" name="phone_code" id="phoneCode" placeholder="输入短信码"/>
          <input class="getCode su" type="button" id="btnSendCode" onclick="getCode()" value="获取验证码" disabled="disabled"/>
        </div>
        <div class="check_error" id="verify_code"></div>

        <div class="pdBox">
          <input class="bigIpt" type="password" name="pwd" id="pwd" placeholder="请输入密码"/>
        </div>
        <div class="check_error" id="verify_pwd"></div>

        <div class="pdBox">
          <input class="bigIpt noborder" type="password" name="repwd" id="repwd" placeholder="再次确认密码"/>
        </div>
        <div class="check_error" id="verify_repwd"></div>

        <div class="footerMsg">
          <span class="blackCheck"></span>
          <span><a href="#(ctx)/mobile/login/protocol">我已阅读并同意《洁玥微商城使用协议》</a></span>
        </div>
        <input class="gradBtn2 mtThree" type="button" id="register" value="确认" disabled="disabled"/>
      </form>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../public/assets/css/mixin.styl"

  .pdBox
    width ex(438)
    height ex(60)
    margin auto
    border 1px solid #ddd
    border-radius ex(30)
    margin-bottom ex(21)
    >input
      font-size ex(30)
      height 100%
      background none
      border 0
      outline none
      &::-webkit-input-placeholder
        font-size ex(30)
        color #999
      &.minIpt
        width 60%
        font-size: .3rem;
        height: .98rem;
        outline: none;
      &.getCode
        width 40%
        color: #f96a6c;
        font-size: .3rem;
        height: .66rem;
        padding-left: .1rem;
        border-left: 1px solid #b5b5b5;
        line-height: .66rem;
        background: none;
</style>