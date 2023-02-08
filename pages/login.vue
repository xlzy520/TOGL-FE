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
    <el-collapse-transition>
      <div class="login_new" v-if="newsShow">
        <div class="login_new_but">
          <span
            ><img @click="newsHide" src="~assets/image/btn_hp_newss.svg"
          /></span>
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
    </el-collapse-transition>
    <div class="login_width">
      <div class="login_width_left">
        <b>Welcome to</b>
        Public Application Portal for Temporary Occupation of Government Land
      </div>
      <div class="login_width_right" v-if="registerHide">
        <div class="login_table">
          <div class="register_title"><b>Log in</b></div>
          <div class="login_table_ct">
            <div class="login_table_title">
              <img src="~assets/image/Icon_hp_account.svg" /> Account
            </div>
            <div class="login_table_txt">
              <el-input
                v-model="account"
                class="form-input"
                placeholder="Type your account name"
              ></el-input>
            </div>
            <div class="login_table_title">
              <img src="~assets/image/Icon_hp_password.svg" /> Password
              <span><a @click="showEMAILForget">Forget Password</a></span>
            </div>
            <div class="login_table_txt">
              <el-input
                placeholder="Type your password"
                class="form-input"
                v-model="password"
                show-password
              ></el-input>
            </div>
            <div class="login_table_but">
              <nuxt-link to="/register">
                <el-button class="register_botton_a">
                  Register Account
                </el-button>
              </nuxt-link>
              <a href="AccountSettings.html" class="register_botton_but"
                >Login</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="login_width_right" v-if="registerEMHide">
        <div class="login_table">
          <div class="register_title"><b>Forget Password</b></div>
          <div class="login_table_ct">
            <div class="login_table_tu">
              Forgot your password? Enter your email below and we'll send you a
              password reset mail.
            </div>
            <div class="login_table_title">
              <img src="~assets/image/Email_icon.png" /> Email
            </div>
            <div class="login_table_txt">
              <el-input
                v-model="email"
                class="form-input"
                placeholder="input account registration email"
              ></el-input>
            </div>
            <div class="login_table_but">
              <a @click="showEMAILForget" class="register_botton_a">Back</a>
              <a
                href="Forget Password-WrongEmail.html"
                class="register_botton_but"
                >Reset</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="foot logo_foot">
        <div class="container">
          <div class="foot_left">
            <img src="~assets/image/foot_logo.png" />
            <span>
              <b>Lands Department</b>
              Lands Department © The Government of the HKSAR. <br />
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      newsShow: true,
      registerHide: true,
      registerEMHide: false,
    };
  },
  methods: {
    login() {},
    newsHide() {
      this.newsShow = false;
    },
    showEMAILForget() {
      this.registerHide = !this.registerHide;
      this.registerEMHide = !this.registerEMHide;
    },
  },
};
</script>
<style lang="scss" scoped>
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
            text-decoration: none;
            outline: none;
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
  .login_width {
    display: table;
    width: 100%;
    padding: 120px 20px;
    position: relative;
    padding-top: 8%;
    z-index: 3;
    .login_width_left {
      vertical-align: bottom;
      display: table-cell;
      font-family: "ManropeBlack";
      font-size: 46px;
      line-height: 1.2;
      padding-right: 80px;
      b {
        display: block;
        font-size: 40px;
        padding-bottom: 15px;
      }
    }
    .login_width_right {
      display: table-cell;
      width: 45%;
      .login_table {
        width: 100%;
        max-width: 580px;
        min-width: 520px;
        box-shadow: 5px 5px 6px #00000029;
        padding: 20px;
        background: #fff;
        border-radius: 15px;
        .register_title {
          display: block;
          font-size: 36px;
          background: #2ca2b9;
          color: #fff;
          padding: 5px 10px;
          text-align: center;
          border-radius: 10px;
        }
        .login_table_ct {
          padding: 30px 0px 20px;
          width: 80%;
          margin: 0px auto;
          .login_table_tu {
            padding-bottom: 25px;
          }
          .login_table_title {
            font-size: 20px;
            font-family: "ManropeBlack";
            color: #2079a9;
            overflow: hidden;
            padding-bottom: 10px;
            img {
              float: left;
              margin-right: 10px;
              height: 26px;
            }
            span {
              float: right;
              font-size: 16px;
              text-decoration: underline;
              font-family: "ManropeRegular";
            }
          }
          .login_table_txt {
            padding-bottom: 20px;
            .form-input {
              &::v-deep .el-input__inner {
                border: 1px solid #3d9dd1;
                border-radius: 10px;
                background: #ecf6fb;
                padding: 10px 15px;
                font-size: 16px;
                width: 100%;
                &::placeholder{
                  color: #2079a9;
                }
              }
            }
          }
          .login_table_but {
            text-align: right;
            padding-top: 10px;
            .register_botton_a {
              color: #2ca2b9;
              background: #fff;
              border: 2px solid #2ca2b9;
              margin: 0px 5px;
              border-radius: 36px;
              font-size: 20px;
              padding: 0px 30px;
              display: inline-block;
              height: 48px;
              line-height: 44px;
            }
            .register_botton_but {
              color: #2ca2b9;
              background: #2ca2ba;
              color: #fff !important;
              cursor: pointer;
              margin: 0px 5px;
              border: 2px solid #2ca2ba;
              border-radius: 36px;
              font-weight: 600;
              font-size: 20px;
              padding: 0px 30px;
              height: 48px;
              display: inline-block;
              line-height: 42px;
            }
          }
        }
      }
    }
  }
  .logo_foot {
    position: absolute;
    bottom: 0;
    left: 0;
    background: none;
    padding: 20px;
    .container {
      max-width: initial;
      padding: 0px;
      width: 100%;
      .foot_left {
        display: flex;
        line-height: 1.4;
        img {
          height: 75px;
        }
        span {
          line-height: 1.1;
          padding-left: 10px;
          b {
            font-size: 24px;
            display: block;
            padding: 0px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
