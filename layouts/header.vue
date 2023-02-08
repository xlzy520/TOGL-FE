<template>
  <div class="top">
    <div class="top_width">
      <div class="top_logo">
        <a href="#"><img src="~assets/image/logo.png" /></a>
      </div>
      <div class="top_right">
        <div class="top_right_text">
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Site Map</a>
          <div class="top_right_get">
            <a href="#">Eng</a> | <a href="#">繁</a> | <a href="#">简</a>
        </div>
        </div>
        <div class="top_right_size">
          <button class="but_16">A</button>
          <button class="but_24">A</button>
          <button class="but_30">A</button>
        </div>
        <div class="clear"></div>
        <div class="top_right_but">
          <nuxt-link to="/index">
            <a href="#"><i class="iconfont icon-search"></i></a>
          </nuxt-link>
          <nuxt-link to="/login">
            <a><i class="iconfont icon-home"></i></a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.top {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flow-root;
  z-index: 9; /* overflow: hidden; */
  .top_width {
    display: block;
    padding: 10px 20px;
    .top_logo {
      float: left;
      img {
        height: 95px;
      }
    }
    .top_right {
      float: right;
      color: #2079a9;
      .top_right_text {
        float: left;
        padding-top: 11px;
        padding-right: 5px;
        .top_right_get {
          display: inline-block;
          padding: 0px 3px;
          a {
            padding: 0px 1px;
          }
        }
      }
      a {
        text-decoration: underline;
        padding: 0px 5px;
      }
      .top_right_size {
        display: inline-block;
        padding-left: 3px;
        float: right;
        overflow: hidden;
        button {
          background: none;
          border: none;
          line-height: 30px;
          height: 30px;
          border-bottom: #2079a9 solid 1px;
          font-weight: 600;
          float: left;
          padding: 0px 5px;
        }
        .but_24 {
          font-size: 24px;
          line-height: 34px;
        }
        .but_16 {
          font-size: 16px;
          line-height: 40px;
        }
        .but_30 {
          font-size: 30px;
        }
      }
      .top_right_but {
        display: block;
        text-align: right;
        padding-top: 10px;
        a {
          padding: 0px;
          overflow: hidden;
          margin: 0px;
          float: right;
          display: inline-block;
        }
        i {
          font-size: 24px;
          padding: 0px 15px;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          border-radius: 40px;
          background: #fff;
          margin-left: 10px;
        }
        .fa-search {
          font-size: 20px;
        }
        a:hover i {
          background: #2079a9;
          color: #fff;
        }
      }
    }
  }
}
</style>
