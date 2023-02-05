export default function({$axios, redirect, route, store}){


  $axios.defaults.timeout = 10000;

  // 请求拦截
  $axios.onRequest(config=>{
    console.log('请求拦截');

    config.headers.token = store.state.user.token || '';

    return config;
  })

  $axios.onResponse(res=>{

    if(res.data.err === 2 && route.fullPath !== '/login'){
      redirect('/login?path='+route.fullPath)
    }

    return res;

  })

  $axios.onError(error=>{
    return error;
  })
}