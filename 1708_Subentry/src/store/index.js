import Vue from 'vue'

import Vuex from 'vuex'//下载命令 npm install vuex
import logger from 'vuex/dist/logger'
import user from './domer/user'
Vue.use(Vuex);
const state = {
    T: true,
    arr: []
}
const mutations = {
    CHANGEON(state, i) {
        // let tr =  state.arr.find(k=>k.trs===false);
        // tr.trs = i
        let trues = state.arr.every(k => k.trs === false);
        if (i.trs === false) {

            state.T = false
        }
    },
    TS(state, i) {
        if (i) {
            state.T = i
            state.arr.forEach(e => {
                e.trs = i
            });
        } else {
            state.T = true
        }

    },
    ADDARR(state, i) {
        // let arrs = new Set(state.arr);  
        // state.arr = arrs;
        let xt = state.arr.find(item => item.id === i.id) //返回符合条件的元素
        if (xt) {
            xt.count += 1
            // state.arr.push(i)
            //    state.arr = [state.arr]
        } else {
            state.arr.push(i)
            i.count = 1
            //    state.arr = [state.arr,i]

        }

    }
    // INCREMENT(state,payload){
    //     state.count+=10
    //     state.name += payload
    //     // state.name = name
    // },
    // DECREMENT(state){
    //     state.count-=5
    // }


}
const actions = {
    // increment ({commit},name) {



    //   commit('INCREMENT',name)//传参
    // },
    // decrement ({commit}){
    //   commit('DECREMENT')
    // }
}
const getters = {//组件的computed 是vuex的计算属性

}
const modules = {//模块化
    //    user:user
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules
})