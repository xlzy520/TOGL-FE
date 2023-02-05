
export const state = () => ({
    
});


export const mutations = {
    
};


export const actions = {
    nuxtServerInit(store,{app:{$cookies}}){
      let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登入',token: ''}

      store.commit('user/M_UPDATE_USER',user)
    }
};

export const getters = {
    
};
