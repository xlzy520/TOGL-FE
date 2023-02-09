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
          <div class="AccountSettings_table_li actions">
            <b>General Settings</b>
            <a href="GeneralSettings.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
          </div>
          <div class="AccountSettings_table_box">
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">
                  Which district will you make application most likely?
                </div>
                <div class="register_li">
                  <div class="register_li_input">
                    <el-select
                      class="form-select"
                      v-model="value1"
                      multiple
                      filterable
                      placeholder="please selected"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="register_centent">
              <div class="register_100">
                <div class="register_txt_label title_24">
                  Prefered main page?
                </div>
                <div class="register_li">
                  <div class="register_radio_li">
                    <div class="payment_radio_li title_20">
                      <el-radio
                        class="radio_class"
                        v-model="Agreement"
                        label="1"
                      >
                        Street Counter
                      </el-radio>
                    </div>
                  </div>
                  <div class="register_radio_li">
                    <div class="payment_radio_li title_20">
                      <el-radio
                        class="radio_class"
                        v-model="Agreement"
                        label="2"
                      >
                        Vacant Government Land
                      </el-radio>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="register_botton padding_10">
              <a href="AccountSettings.html" class="register_botton_a">Back</a>
              <button class="register_botton_but">Save</button>
            </div>
          </div>
          <div class="AccountSettings_table_li">
            <b>Contact Information</b>
            <a href="ContactInformation.html"
              >Edit <i class="iconfont icon-edit"></i
            ></a>
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
      Agreement: "",
      value1:[],
      options:[
			{name: 'Hong Kong East', value: 1},
			{name: 'Hong Kong West and South', value: 2},
			{name: 'Kowloon East', value: 3},
      {name: 'Kowloon West', value: 4},
      {name: 'Islands', value: 5},
      {name: 'North', value: 6},
      {name: 'Sha Tin', value: 7},
      {name: 'Sai Kung', value: 8},
      {name: 'Tai Po', value: 9},
      {name: 'Tsuen Wan and Kwai Tsing', value: 10},
      {name: 'Tuen Mun', value: 11},
      {name: 'Yuen Long', value: 12},
		],
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
    .register_100 {
      width: 100%;
      padding: 0px 30px;
    }
    .form-select {
      width: 100%;
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
    .payment_radio_li {
      &::v-deep .el-radio {
        .el-radio__label {
          color: #2079a9;
          font-size: 1rem;
        }
      }
      .radio_class {
        &::v-deep .el-radio__input {
          .el-radio__inner {
            background-color: #fff;
            border: 2px solid #2079a9;
            width: 28px;
            height: 28px;
            &::after {
              width: 15px;
              height: 15px;
              background-color: #2079a9;
            }
          }
        }
      }
    }
  }
}
</style>
