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

          <div class="AccountSettings_table_box actions">
            <div class="register_centent">
              <div class="register_50">
                <div class="register_txt_label title_24">
                  Supporting Documents
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
              </div>
            </div>

            <div class="clear"></div>
            <div class="register_botton padding_10">
              <a href="AccountSettings.html" class="register_botton_a">Back</a>
              <button class="register_botton_but">Save</button>
            </div>
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
    }
  }
  .AccountSettings_table {
    display: block;
  }
  .AccountSettings_table_li {
    border-bottom: #2079a9 solid 2px;
    padding: 15px 0px;
    overflow: hidden;
  }
  .AccountSettings_table_li b {
    font-size: 18px;
    color: #2079a9;
  }
  .AccountSettings_table_li a {
    padding: 5px 20px;
    border-radius: 30px;
    float: right;
    background: #2079a9;
    color: #fff;
  }
  .AccountSettings_table_li.actions b {
    color: #2ca2ba;
  }
  .AccountSettings_table_li.actions a {
    background: #2ca2ba;
  }
  .AccountSettings_table_box {
    padding: 30px;
    padding-bottom: 50px;
    background: #ecf6fb;
  }
}
</style>
