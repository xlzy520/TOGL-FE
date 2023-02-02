<!-- Please remove this file from your project -->
<template>
  <div class="logo_index">
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
            <a href="#"><i class="fa fa-search"></i></a>
            <a href="#"><i class="fa fa-home"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="register_bg"></div>
    <div class="login_new">
      <div class="login_new_but">
        <span><img src="~assets/image/btn_hp_newss.svg" /></span>
      </div>
      <div class="login_new_ct">
        <div class="login_new_ct_li">
          <div class="login_new_icon">
            <img src="~assets/image/Icon_hp_news.svg" />
          </div>
          <b>2022.5.16</b>
          <a href="news.html"
            >Removal Notice: Service Suspension of Map Sales and Survey Data
            Services Counter at District Survey Office / Yuen Long.</a
          >
        </div>
        <div class="login_new_ct_li">
          <div class="login_new_icon">
            <img src="~assets/image/Icon_hp_news.svg" />
          </div>
          <b>2022.3.20</b>
          <a href="news.html"
            >Government to sell site in Kwun Tong by public tender.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtLogin",
};
</script>
<style lang="scss">
.logo_index {
  .top {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    display: flow-root;
    z-index: 9;
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
          color: #2079a9;
          &:hover {
            color: #ffb400;
          }
        }
        .top_right_size {
          display: inline-block;
          padding-left: 3px;
          padding-top: 1px;
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
            color: #2079a9;
          }
          .but_16 {
            font-size: 16px;
            line-height: 40px;
            color: #2079a9;
          }
          .but_30 {
            font-size: 30px;
            color: #2079a9;
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
            &:hover i {
              background: #2079a9;
              color: #fff;
            }
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
        }
      }
    }
  }
  .register_bg {
    background: url(~assets/image/hp_background.jpg) center center no-repeat;
    background-size: cover;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: block;
  }
  .login_new {
    position: absolute;
    left: 0px;
    border-radius: 0px 0px 30px 30px;
    width: 90%;
    max-width: 660px;
    padding: 0px 20px;
    z-index: 99;
    margin: 0 auto;
    display: block;
    top: 0px;
    right: 0px;
    background-color: rgba(255, 255, 255, 0.5);
    .login_new_but {
      display: block;
      text-align: center;
      padding: 10px;
      span {
        cursor: pointer;
        display: inline-block;
      }
    }
    .login_new_ct {
      display: block;
      .login_new_ct_li {
        position: relative;
        padding-left: 40px;
        padding-bottom: 15px;
        b {
          display: block;
        }
        a {
          color: #3b5974;
          &:hover {
            color: #2ca2b9;
            text-decoration:none;
            outline:none;
          }
        }
        .login_new_icon {
          position: absolute;
          left: 0px;
          top: 2px;
        }
      }
    }
  }
}
</style>
