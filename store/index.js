import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const state = () => ({
    navigatorBarList:[
      {
        item:'首页',
        path:'/'
      }
    ],    // 导航栏列表
});
const mutations = {
    addNavigatorBar(state, option) {
        console.log('添加的导航栏bar：',state,option)
        const navArr = state.navigatorBarList
        const { path } = option

        state.navigatorBarList.push(option)
        console.log(state.navigatorBarList)
    },
};

export default {
    state,
    mutations
};