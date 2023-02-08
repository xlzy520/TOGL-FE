<template>
  <div class="nuxt_content" :style="{ minHeight: nuxt_height }">
    <app-header v-if="bNav"></app-header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "./header.vue";
import Footer from "./footer.vue";
export default {
  // middleware: 'auth', // 页面层级的中间件定义
  middleware({ store, route, redirect, params, query }) {
    console.log("middleware layouts inside");
    // store状态树信息
    // route 一条目标路由信息
    //redirect 路由的强制跳转
    // params query 校验参数的合理性
    // console.log('layouts守卫前置守卫')
    // redirect('/reg')
  },
  data() {
    return {
      bNav: true,
      nuxt_height: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (/login|reg/.test(route.path) || /register|reg/.test(route.path)) {
          this.bNav = false;
        } else {
          this.bNav = true;
        }
      },
    },
  },
  components: {
    AppHeader,
    Footer,
  },
  mounted() {
    if (process.client) {
      this.nuxt_height = document.documentElement.clientHeight +'px';
      window.addEventListener("resize", () => {
        this.nuxt_height = document.documentElement.clientHeight +'px';
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.nuxt_content {
  font-family: "ManropeRegular", "Helvetica Neue", Helvetica, Arial,
    "Ã¤Â¿Âª Pro", "LiHei Pro", "STHeiti", "Apple LiGothic Medium",
    "Ã¥Â¾Â®Ã¨Â½Â¯Ã¦Â­Â£Ã¤Â½â€œ", "Microsoft JhengHei", sans-serif;
  background: url(~assets/image/hp_background.jpg) center center no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  color: #3b5974;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
