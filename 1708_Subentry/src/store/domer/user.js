
//模块化modules
const user = {
    namespaced: true,   //命名空间  在调用的时候要在前面加上名 没有命名空间的 就会注册在全局上 能防止别人污染你的变量
    state:{
        username:'admin'
    },
    actions:{},
    mutations:{},
    getters:{}

}
export default user