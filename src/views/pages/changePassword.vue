<template>
  <div class="container">
    <div class="register_bg"></div>
    <div class="register_width">
      <div class="register_title"><b>Account Settings</b></div>
      <div class="register_txt">
        <div class="register_txt_title title_24">
          <b>Account Information</b>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Organization/ Name of LegCo/ DC Member
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_20">OOOOOOOOOO</div>
            </div>
          </div>
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Sub-Organization
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_20">OOOOOOOOOO</div>
            </div>
          </div>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Registration Number (Optional)
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_20">xxxxxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Validity Period (Optional)
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_20">xxxx/xx/xx</div>
            </div>
          </div>
        </div>

        <div class="clear"></div>

        <div class="AccountSettings_table">
          <div class="AccountSettings_table_li">
            <b>General Settings</b>
            <a href="GeneralSettings.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
          </div>

          <div class="AccountSettings_table_li">
            <b>Contact Information</b>
            <a href="ContactInformation.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
          </div>

          <div class="AccountSettings_table_li actions">
            <b>Change Password</b>
            <a href="ChangePassword.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
          </div>

          <div class="AccountSettings_table_box">
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
                <div class="register_txt_label title_24">
                  Current Password
                  <a href="ForgetPassword.html">Forget Password</a>
                </div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input
                      placeholder=""
                      class="form-input"
                      v-model="forgetPassword"
                      show-password
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">New Password</div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input
                      placeholder=""
                      class="form-input"
                      v-model="NewPassword"
                      show-password
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>

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
            <div class="register_botton padding_10">
              <a href="AccountSettings.html" class="register_botton_a">Back</a>
              <button class="register_botton_but">Save</button>
            </div>
          </div>

          <div class="AccountSettings_table_li">
            <b>Account Renewal</b>
            <a href="AccountRenewal.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
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
      a: "",
      forgetPassword: "",
      NewPassword: "",
      confirmNewPassword: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  .register_centent {
    display: flex;
    margin: 0px -30px;
    .register_50 {
      width: 50%;
      padding: 0px 30px;
      float: left;
    }
  }
  .form-input {
    &::v-deep .el-input__inner {
      border: 1px solid #3d9dd1;
      border-radius: 10px;
      background: #ecf6fb;
      padding: 10px 15px;
      font-size: 16px;
      width: 100%;
      &::placeholder {
        color: #2079a9;
      }
    }
    &::v-deep .el-input__prefix {
      display: none;
    }
  }
  .padding_10 {
    padding-top: 15px;
  }
}
</style>
