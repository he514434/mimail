<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>             
    <div class="footer-link">
      <a href="https://gitee.com/zhangq1007" target="_blank">张渠主页</a><span>|</span>
      <a href="https://gitee.com/zhangq1007/qunaer-cli4" target="_blank">去哪儿</a><span>|</span>
      <a href="https://gitee.com/zhangq1007/eleme" target="_blank">饿了么</a><span>|</span>
      <a href="https://gitee.com/zhangq1007/mi-mall" target="_blank">小米商城</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
  export default{
    name:'NavFooter'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>