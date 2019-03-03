import axios from 'axios';


axios.defaults.baseURL='http://localhost:3000';
// 拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export let getBaner = ()=>{
    return axios.get('/slider')
}
export let getNew = ()=>{
    return axios.get('/new')
}
export let GetListData = ()=>{
    return axios.get('/list')
}

export let GetOne = (id)=>{
    return axios.get(`/list?id=${id}`)
}

export let getPage = (page)=>{
    return axios.get(`/page?page=${page}`)
}
export let getHome=()=>{
    return axios.all([getBaner(),getNew()])
}
export let deleteGo=(id)=>{
    return axios.delete(`/list?id=${id}`)
}

// 添加商品
export let addlist =(good)=>{
    return axios.post('st',good)
  }
  



