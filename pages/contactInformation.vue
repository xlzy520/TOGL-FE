<template>
  <div class="container">
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
              <div class="reubmitpage_label">OOOOOOOOOO</div>
            </div>
          </div>
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Sub-Organization
            </div>
            <div class="register_li">
              <div class="reubmitpage_label">OOOOOOOOOO</div>
            </div>
          </div>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Registration Number (Optional)
            </div>
            <div class="register_li">
              <div class="reubmitpage_label">xxxxxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Validity Period (Optional)
            </div>
            <div class="register_li">
              <div class="reubmitpage_label">xxxx/xx/xx</div>
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

          <div class="AccountSettings_table_li actions">
            <b>Contact Information</b>
            <a href="ContactInformation.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
          </div>

          <div class="AccountSettings_table_box">
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">
                  Name of Contact Person
                </div>
                <div class="register_li">
                  <div class="register_li_input layui-form">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">
                  Position in the Applicant Organization
                </div>
                <div class="register_li">
                  <div class="register_li_input layui-form">
                    <div id="district_select"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="register_centent">
              <div class="register_100">
                <div class="register_txt_label title_24">
                  Correspondence Address
                </div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                  <div class="register_li_input padding_10">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">E-mail</div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">Tel.No.</div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">
                  Emergency Tel.No.(Optional)
                </div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input v-model="a" class="form-input"></el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">Fax.No.(Optional)</div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-input v-model="a" class="form-input"></el-input>
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
            <b>Change Password</b>
            <a href="ChangePassword.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
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
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
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
