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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
}
</style>
