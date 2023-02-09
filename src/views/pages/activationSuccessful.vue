<template>
  <div class="container">
    <div class="box_Tips_width">
        <div class="box_Tips_ct">
            <div class="box_Tips_table">
                <div class="box_Tips_table_icon"><img src="~assets/image/icon_checkmark.svg"></div>
                <div class="box_Tips_table_title">Activation Successful</div>
                <div class="box_Tips_table_txt">
                    Your account has been activated!
                    <br>Kindly use the button below to log into the system.
                </div>
                <div class="box_Tips_table_but">
                    <button class="register_botton_but">Login</button>
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
      }
      .box_Tips_table_title {
        padding: 25px 0px;
        line-height: 1.2;
        color: #2079a9;
        font-size: 40px;
        font-family: "ManropeBlack";
      }
      .box_Tips_table_txt {
        font-size: 18px;
      }
      .box_Tips_table_but {
        padding-top: 40px;
      }
    }
  }
}
</style>
