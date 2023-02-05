export const state = () => ({
    name:'',
    token: '',
});


export const mutations = {
    M_UPDATE_USER(user,payload){
      user.name = payload.name;
      user.token = payload.token;
    }
};

export const actions = {
  A_UPDATE_USER({commit,user},payload){
    commit('M_UPDATE_USER',payload)
  }
};