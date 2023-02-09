<template>
  <div class="container">
    <div class="register_width">
      <div class="register_title">
        <b>Resubmit for Your Account of SC e-Submission application</b>
      </div>
      <div class="register_txt">
        <div class="register_txt_title title_24">
          <b>Details of Organization :</b>
        </div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Organization/ Name of LegCo/ DC Member
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_24">OOOOOOOOOO</div>
            </div>
          </div>
          <div class="register_50">
            <div class="register_txt_label title_24">
              Name of Sub-Organization
            </div>
            <div class="register_li">
              <div class="reubmitpage_label title_24">OOOOOOOOOO</div>
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
          <div class="register_100">
            <div class="register_txt_label padding_20 title_24">
              Agreement for privacy policy
            </div>
            <div class="register_li">
                <div class="register_radio_li">
                  <div class="payment_radio_li title_20">
                    <el-checkbox class="radio_class" v-model="Agreement">
                      I understand and agree to the
                      <a class="PrivacyPolicy_open">
                        <b>User Agreement Privacy Policy</b>
                      </a>
                    </el-checkbox>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="register_botton padding_10">
          <a href="index.html" class="register_botton_a">Back</a>
          <button class="register_botton_but">Resubmit</button>
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
  .register_centent {
    display: flex;
    margin: 0px -30px;
    .register_50 {
      width: 50%;
      padding: 0px 30px;
      float: left;
      .register_li {
        padding: 0px 10px;
        padding-bottom: 30px;
      }
    }
    .register_100 {
      width: 100%;
      padding: 0px 30px;
      .padding_20 {
        padding-top: 40px;
      }
      .register_txt_label {
        color: #2079a9;
        padding-bottom: 15px;
      }
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
            &::v-deep .el-checkbox__label{
                color: #000 !important;
                font-size: 16px;
              }
          }
        }
      }
    .padding_10 {
      padding: 15px 30px;
    }
  }
  .register_txt_title {
    color: #2079a9;
    padding: 15px 0px;
    padding-top: 20px;
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
</style>
