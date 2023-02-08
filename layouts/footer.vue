<template>
  <div class="foot logo_foot">
    <div class="container">
      <div class="foot_left">
        <img src="~assets/image/foot_logo.png">
        <span>
        <b>Lands Department</b>
        Lands Department © The Government of the HKSAR. <br>
        All Rights Reserved. 
      </span>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .logo_foot {
    margin-bottom: 0;
    background: none;
    padding: 20px;
    .container {
      max-width: initial;
      padding: 0px;
      width: 100%;
      .foot_left {
        display: flex;
        line-height: 1.4;
        img {
          height: 75px;
        }
        span {
          line-height: 1.1;
          padding-left: 10px;
          b {
            font-size: 24px;
            display: block;
            padding: 0px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
</style>