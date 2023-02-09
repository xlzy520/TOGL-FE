<template>
  <div class="container">
    <div class="register_width">
      <div class="register_title"><b>Contact</b></div>
      <div class="register_txt">
        Use the Form Below to Drop Us an E-mail.
        <div class="clear"></div>
        <div class="register_centent padding_10">
          <div class="register_50">
            <div class="register_txt_label title_24">Name</div>
            <div class="register_li">
              <div class="register_li_input register_li_error">
                <el-input v-model="name" class="form-input"></el-input>
                <i class="fa fa-exclamation-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">Email Address</div>
            <div class="register_li">
              <div class="register_li_input">
                <el-input v-model="email" class="form-input"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="register_centent">
          <div class="register_50">
            <div class="register_txt_label title_24">Subject</div>
            <div class="register_li">
              <div class="register_li_input">
                <el-input v-model="Subject" class="form-input"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>

        <div class="register_centent">
          <div class="register_100">
            <div class="register_txt_label title_24">Message</div>
            <div class="register_li">
              If you have any questions or need help, please leave your question
              here.
              <div class="register_li_input padding_10">
                <el-input rows="7" class="form-input" type="textarea" v-model="message"></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>

        <div class="register_botton padding_10">
          <a href="index.html" class="register_botton_a">Back</a>
          <button class="register_botton_but">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:'',
      email:'',
      Subject:'',
      message:''
    }
  }
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
    &::v-deep .el-textarea__inner {
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
  .register_li_error .form-input {
    &::v-deep .el-input__inner {
      border: 1px solid #ff5c5c;
      background: #FFE2E2;
    }
  }
  .padding_10{
    margin-top: 15px;
  }
  .register_li_input{
    i.fa {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -15px;
      font-size: 30px;
    }
  }
}
</style>
