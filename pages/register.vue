<template>
  <div class="container">
    <div class="register_width">
      <div class="register_title"><b>Create Your Account</b></div>
      <div class="register_txt">
        *Fields are required if not otherwise stated.
        <div class="register_txt_title title_24">
          <b>Details of Organization :</b>
        </div>
        <div class="register_txt_label title_24">Nature of Organization</div>
        <div class="register_li">
          <div class="register_radio_li">
            <div class="payment_radio_li title_20">
              <el-radio class="radio_class" v-model="delivery_radio" label="1"
                >Incumbent Legislative Council (LegCo) Member/ District Council
                (DC) Member</el-radio
              >
            </div>
          </div>
          <div class="register_radio_li">
            <div class="payment_radio_li title_20">
              <el-radio class="radio_class" v-model="delivery_radio" label="2"
                >Charitable institution or trust of a public character which is
                exempt from tax under section 88 of the Inland Revenue Ordinance
                (Cap. 112) or society registered under Societies Ordinance (Cap.
                151)</el-radio
              >
            </div>
          </div>
          <div class="register_radio_li">
            <div class="payment_radio_li title_20">
              <el-radio class="radio_class" v-model="delivery_radio" label="3"
                >Government department or statutory organisation</el-radio
              >
            </div>
          </div>
          <div class="register_radio_li">
            <div class="payment_radio_li title_20">
              <el-radio class="radio_class" v-model="delivery_radio" label="4"
                >Other legally registered body</el-radio
              >
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Organization/ Name of LegCo/ DC Member
            </div>
            <div class="register_li">
              <div class="register_li_label">
                Provide registered organization name. Identical name required.
              </div>
              <div class="register_li_input register_li_error">
                <el-input v-model="a" class="form-input"></el-input>
                <i @click="errorTips" class="el-icon-warning"></i>
              </div>
            </div>
          </div>
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Sub-Organization(Optional)
            </div>
            <div class="register_li">
              <div class="register_li_label">
                Please provide registered sub-organization name. Identical name
                required.
              </div>
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
              Registration Number(Optional)
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
            <div class="register_txt_label title_24">
              Validity Period(Optional)
            </div>
            <div class="register_li">
              <div class="layui-form register_li_input">
                <el-date-picker
                  v-model="date1"
                  type="date"
                  class="form-input"
                  placeholder=""
                >
                </el-date-picker>
                <i class="fa fa-calendar"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="register_txt_title padding_20 title_24">
          <b>Contact information:</b>
        </div>

        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">Family Name</div>
            <div class="register_li">
              <div class="register_li_input">
                <el-input v-model="a" class="form-input"></el-input>
              </div>
            </div>
          </div>
          <div class="register_50">
            <div class="register_txt_label title_24">Given Name</div>
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
              Position in the Applicant Organization
            </div>
            <div class="register_li">
              <div class="register_li_input layui-form">
                <el-input v-model="a" class="form-input"></el-input>
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

        <div class="register_txt_title padding_20 title_24">
          <b>Supporting Documents</b>
        </div>
        <div class="register_li">
          I/We attach the following documents in support of my/our application
          (please see belows Note (1)):<br />
          (a) documentary evidence to prove that the Applicant is a charitable
          institution or trust of apublic character exempt from tax under
          section 88 of the Inland Revenue Ordinance Cap.112 (if applicable);<br />
          (b) documentary evidence to prove that the Applicant is a society
          registered under the Societies Ordinance Cap. 151 (if applicable);
          or<br />
          (C) documentary evidence to prove that the Applicant is a legally
          registered body (please specify).
          <div class="register_centent">
            <div class="register_50 padding_10">
              <el-input v-model="a" class="form-input"></el-input>
            </div>
          </div>

          <div class="register_Upload">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >上传到服务器</el-button
              >
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
          I/We acknowledge and agree that failure to submit the required
          documents may lead to rejection of the application. I/We also
          acknowledge and agree that I/we may need to submit other additional
          information or documents as may be required by the Lands Department to
          facilitate the assessment of my/our application. Unless such
          additional information/documents are submitted, my/our application
          cannot be further processed.
          <br />NOTE:<br />
          (1) No documentation proof is required if the application is made by
          incumbent Lego Members/DC Members, Government departments or statutory
          organisations.
          <div class="clear"></div>
        </div>

        <div class="clear"></div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Which service district you are for?
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
              Agreement for privacy policy
            </div>
            <div class="register_li">
              <div class="register_radio_li">
                <div class="payment_radio_li title_20 PrivacyPolicy_item">
                  <el-checkbox class="radio_class" v-model="Agreement">
                    I understand and agree to the
                  </el-checkbox>
                  <a class="PrivacyPolicy_open" @click="privacyPolicy">
                    <b>User Agreement Privacy Policy</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="register_botton padding_10">
          <nuxt-link to="/login">
            <a class="register_botton_a">Back</a>
          </nuxt-link>
          <nuxt-link to="/registrationConfirmPage">
            <a class="register_botton_but">Apply</a>
          </nuxt-link>
          
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="errorDialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div class="box_Tips_width register_error_box">
        <div class="box_Tips_ct">
          <div class="box_Tips_table">
            <div class="box_Tips_table_icon">
              <img src="~assets/image/icon_error.svg" />
            </div>
            <div class="box_Tips_table_txt register_error_box_txt">
              <b>Form contains error. Please correct fields marked in red. </b
              ><br />
              * Name of Contact Person is a required field<br />
              * Tel. No. is a required field
            </div>
            <div class="box_Tips_table_but">
              <button
                @click="errorDialogVisible = false"
                class="register_botton_but"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="policyDialogVisible"
      width="50%"
      class="Applicant"
      :before-close="handleClose"
    >
      <div class="box_Tips_width register_error_box PrivacyPolicy_box">
        <div class="box_Tips_ct">
          <div class="box_Tips_table">
            <div class="PrivacyPolicy_box_title">Applicant Declaration</div>
            <div class="PrivacyPolicy_box_eer">
              Please read and scroll down to the bottom to accept these terms.
            </div>
            <div class="PrivacyPolicy_box_txt">
              <b>A. UNDERTAKING</b><br />
              I/We hereby undertake that:-<br />
              (1) All activities to be held and contents of messages to be
              delivered or displayed during the event shall comply with the laws
              of the Hong Kong Special Administrative Region;
              <br />(2) In case that the Director of Highways, an Assistant
              Commissioner for Transport, the Commissioner of Police or the
              Director of Food and Environmental Hygiene inform me/us at any
              time that any of the specified spots shall not be used for the
              event, I/we shall immediately cease the event and reinstate the
              spot(s), even when approval has been granted; <br />(3) I/We shall
              obtain any other necessary licences, permits and approvals from
              other relevant authorities as may be required for holding the
              non-profit making and non-fund raising activities; and <br />(4)
              In case of ineligibility to apply for or hold the non-profit
              making and non-fund raising activities set out in this application
              as a consequence of changes in my/our status or other aspects,
              I/we shall inform the Lands Department forthwith and this
              application shall be deemed to have been withdrawn. <br /><br /><b
                >B. INDEMNITY</b
              >
              <br />I/We shall indemnify the Government of the HKSAR (“the
              Government”) and the Director of Lands and his officers from and
              against all liabilities, costs, expenses, claims, actions, demand
              and proceedings of whatsoever nature arising out of or in
              connection with the occupation of Government land or the setting
              up, use and holding of or carrying out of any activities at the
              street counters at the designated spots. <br /><br /><b
                >C. DECLARATION</b
              ><br />
              I/We hereby declare that:-<br />
              (1) This is the only application for temporary occupation of
              Government land that I/we have made for the above mentioned
              occupation period in respect of the same designated spot(s) or
              otherwise;
              <br />(2) The particulars provided in this form are in all
              respects true, complete and accurate; and <br />(3) I/We have read
              the Notes below and the Guidelines on application for temporary
              occupation of Government land for setting up street counters to
              hold non-profit making activities. <br /><br /><b
                >D. CONSENT TO DISCLOSE</b
              ><br />
              By submitting this application, I/we hereby consent to the
              Government’s disclosure of any or all of the information provided
              by me/us on this application form, whether of its own motion or
              upon request by any third party (written or otherwise) and without
              further reference to me/us.
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel('Cancel')">Cancel</el-button>
        <el-button type="primary" @click="dialogCancel('Agree')">Agree</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery_radio: "",
      a: "",
      date1: "",
      Agreement: false,
      errorDialogVisible: false,
      policyDialogVisible: false,
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    errorTips() {
      this.errorDialogVisible = true;
    },
    handleClose() {
      this.policyDialogVisible = false;
    },
    privacyPolicy() {
      this.policyDialogVisible = true;
    },
    dialogCancel(type){
      if(type === 'Cancel'){
        this.$confirm('Are you sure want to cancel', 'hint', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          this.policyDialogVisible = false;
        }).catch(() => {
        });
      }
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1400px;
  width: 96%;
  padding: 0px;
  position: relative;
  font-size: 1rem;
  .title_24 {
    font-size: 20px;
  }
  .title_20 {
    font-size: 1.125rem;
  }
  .Applicant{
    &::v-deep .el-dialog{
      height: 650px;
    }
    .PrivacyPolicy_box_txt{
      max-height: 400px;
    }
    &::v-deep .el-dialog__footer{
      text-align: center;
      .el-button{
        border-radius: 40px;
        border: none;
      }
      .el-button--primary{
        background: #2079a9;
      }
      .el-button--default{
        background: #ecf6fb;
      }
    }
  }
  &::v-deep .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
      padding: 5px;
      border-radius: 50%;
      background: #e4191c;
    }
  }
  &::v-deep .el-checkbox {
    .el-checkbox__label {
      color: #2079a9;
    }
  }
  &::v-deep .el-radio {
    .el-radio__label {
      color: #2079a9;
      font-size: 1rem;
    }
  }
  .payment_radio_li {
    .radio_class {
      font-size: 1rem;
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
      .register_txt_title {
        color: #2079a9;
        padding: 15px 0px;
      }
      .register_txt_label {
        color: #2079a9;
        padding-bottom: 15px;
      }
      .register_li {
        padding: 0px 10px;
        padding-bottom: 30px;
        .payment_radio_li {
          display: block;
          padding-bottom: 15px;
          &:nth-last-child(1) {
            padding-bottom: 0px;
          }
          .radio_class {
            font-size: 18px;
            background-size: 26px auto;
            line-height: 1.5;
            position: relative;
            min-height: 26px;
            display: block;
            padding: 0;
            cursor: pointer;
            margin: 0;
            font-weight: normal;
            text-align: left;
            &::v-deep .el-checkbox__input {
              .el-checkbox__inner {
                background-color: #fff;
                border-color: #409eff;
                border-radius: 50%;
                width: 28px;
                height: 28px;
                border: 2px solid #409eff;
                &::after {
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  background-color: #2079a9;
                  top: 4px;
                  left: 4px;
                }
              }
            }
          }
        }
      }
      .register_centent {
        display: flex;
        margin: 0px -30px;
        .PrivacyPolicy_item {
          display: flex;
          a {
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            padding-left: 5px;
          }
        }
        .register_50 {
          width: 50%;
          padding: 0px 30px;
          float: left;
          .register_li_error {
            .form-input {
              &::v-deep .el-input__inner {
                border: 1px solid #ff5c5c;
                background: #ecf6fb;
              }
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
          &::v-deep .el-date-editor {
            width: 100%;
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
      }
    }
  }
}
</style>
