<template>
  <div>
    <div class="box_Tips_width">
      <div class="box_Tips_ct">
        <div class="box_Tips_table">
          <div class="box_Tips_table_icon">
            <img src="~assets/image/icon_checkmark.svg" />
          </div>
          <div class="box_Tips_table_title">
            Account Registration<br />Submitted Successfully
          </div>
          <div class="box_Tips_table_txt">
            Your account registration request has been submitted. We are in the
            process of reviewing your account application. <br />
            We will send you an email after reviewing your application to the
            registered email address.
          </div>
          <div class="box_Tips_table_but">
            <nuxt-link to="/login">
              <el-button type="success">OK</el-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.box_Tips_width {
  padding: 100px 0px;
  left: 0px;
  top: 50px;
  bottom: 50px;
  display: table;
  width: 100%;
  position: relative;
  .box_Tips_ct {
    display: table-cell;
    vertical-align: middle;
    .box_Tips_table {
      width: 96%;
      max-width: 750px;
      border-radius: 10px;
      background: #fff;
      padding: 50px 5%;
      margin: 0 auto;
      text-align: center;
      .box_Tips_table_icon {
        display: block;
        img {
          height: 100px;
        }
      }
      .box_Tips_table_title {
        padding: 25px 0px;
        line-height: 1.2;
        color: #2079a9;
        font-size: 40px;
        font-family: "ManropeBlack";
      }
      .box_Tips_table_txt {
        font-size: 16px;
      }
      .box_Tips_table_but {
        padding-top: 40px;
        .el-button{
          width: 6.25rem;
          height: 48px;
          background: #2CA2BA;
          border-radius: 36px;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
