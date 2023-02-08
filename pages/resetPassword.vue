<template>
  <div>
    <div class="container">
      <div class="register_width">
        <div class="register_title"><b>Reset Your Password</b></div>
        <div class="register_txt">
          <div class="ResetPassword_txt">
            Password requirements: <br />
            At least 8 characters <br />
            A lowercase letter <br />
            An uppercase letter <br />
            A number <br />
            Your password cannot be any of your last 10 passwords
          </div>
          <div class="register_centent padding_20">
            <div class="register_50">
              <div class="register_txt_label title_24">New Password</div>
              <div class="register_li">
                <div class="register_li_input">
                  <el-input
                    placeholder=""
                    class="form-input"
                    v-model="newPassword"
                    show-password
                  ></el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Confirm New Password
              </div>
              <div class="register_li">
                <div class="register_li_input">
                  <el-input
                    placeholder=""
                    class="form-input"
                    v-model="confirmNewPassword"
                    show-password
                  ></el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_botton margin_top_15">
            <el-button class="register_botton_a" type="success">Reset</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newPassword: "",
      confirmNewPassword: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  .register_width {
    position: relative;
    background: #fff;
    border-radius: 20px;
    padding: 40px 20px;
    margin-bottom: 50px;
    margin-top: 10px;
    .register_title {
      display: block;
      font-size: 36px;
      background: #2ca2b9;
      color: #fff;
      padding: 5px 10px;
      text-align: center;
      border-radius: 10px;
    }
    .register_txt {
      padding: 40px 50px;
      position: relative;
      .register_txt_label {
        color: #2079a9;
        padding-bottom: 15px;
      }
      .ResetPassword_txt {
        font-size: 18px;
        line-height: 1.8;
      }
      .register_centent {
        display: block;
        margin: 0px -10px;
        .register_50 {
          width: 50%;
          padding: 10px;
          .register_txt_label {
            color: #2079a9;
            padding-bottom: 15px;
          }
          .form-input {
            &::v-deep .el-input__inner {
              border: 1px solid #3d9dd1;
              border-radius: 10px;
              background: #ecf6fb;
              padding: 10px 15px;
              font-size: 16px;
              width: 100%;
              height: 44px;
              &::placeholder {
                color: #2079a9;
              }
            }
          }
        }
      }
      .register_botton {
        text-align: center;
        .register_botton_a {
          color: #fff;
          background: #2ca2b9;
          border: 2px solid #2ca2b9;
          margin: 0px 5px;
          border-radius: 36px;
          font-size: 20px;
          padding: 0px 30px;
          display: inline-block;
          height: 48px;
          line-height: 44px;
        }
      }
    }
    .title_24 {
      font-size: 20px;
    }
    .title_20 {
      font-size: 18px;
    }
  }
}
</style>
