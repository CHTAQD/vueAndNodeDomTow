// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import store from './store'//2引入
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad,{
  error:'http://imgsrc.baidu.com/imgad/pic/item/d31b0ef41bd5ad6ee690c1d78acb39dbb6fd3ca5.jpg',
  loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543982772418&di=40dbe2def96c3921e2443304c4a1027c&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1611%2F676-1611100S922.jpg'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//3挂载在实例上
  components: { App },
  template: '<App/>'
})
