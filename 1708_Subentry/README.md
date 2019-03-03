# subentry

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#目录结构
	#.mock 这个文件夹是放数据的
	#.src
		#.api    这个是放所有请求的
		#.components 	这个放页面及组建
		#.router 	路由
		#.assets 	静态文件
		#.base 		这个放公共组件
		#.vueX/store 放vuex 用的时候创建
	组件引入部齱
		1.引用
		2.注册
		3.用标签形式使用
	使用less
		npm install less less-loader
	使用sass
		npm install node-sass sass-loader
	使用Swiper轮波
		npm install vue-awesome-swiper --save
	使用ajax请求使用axios
	npm install axios -s
	axios 是基于 promise封装的
	//exprot 会把当前模块的变量放在一个对象里导出
	//*as T 把变量都放在一个（有命名）对象里面as后面是对象的名字 * 表示所有的
	ref获取原生dom 获取元素本身的所有属性
	#this.$refs.scroll.scrollTop
	#res.setHeader('Access-Control-Allow-Origin','*');在node中设置 可以跨域
	dispatch 和commit的传参问题

	一个参数的时候可以直接传递，多个参数需要用对象传递
	方案一
		 #this.$store.commit('increment',{name:this.name})

		# this.$store.commit({ 直接调用matation中的数据
        #     type:'addcount', type为要提交的mutations函数  必须叫type
        #     name:this.name,	
            
        # })'
		moudle 的注意事项
	有命名空间的mapstate的时候可以 传递模块名
	没有命名空间的不能传递模块名

	没有命名空间的action 和 mutation 会注册在全局上 有命名空间的在自己的模块上

	####vuex使用 把vuex当做一个全局组件
state 相当于组件的data 通过$store.state.value（value:你要取的值）拿到 acitions mutations 相当于组件的methods acitons 是异步的(例如ajax) mutations是同步的 acitons 通过$store.dispatch � mutions 通过$store.commit 触发 //同步流程的写法
组件commit--->mutations --->操作state 组件(或者全局)触发commit[写法：this.$store.commit('事件名',参数《可选项》)]-->mutations �mutations写 和commit事件名同名的函数，参数state(必须)和传的值(可选) ��--->事件里面操作state //异步的流程 组件dispacth--->actions commit --->mutations --->操作state 组件(或者全局)触发dispatch[写法：this.$store.dispatch('事件名',参数《可选项》)] --->actions 写一个同dispatch事件名相同的函数，参数是{commit}和传的值 �--->通过commit提交给mutations[写法：commit('事件名一般会和aciton的方法同名')]--->mutations写事件处理操作state

辅助函数运用时候的特点 值 mapState mapGetters 放在computed 里面 函数 mapActions mapMutions 放在methods里面 moudle 的注意事项 有命名空间的mapState的时候 可以传递模块名 没有命名空间的不能传递模块名
没有命名空间的 actions 和mutatiosn会注册在全局上 有命名空间的在自己的模块上 定义在开发环境(development)使用严格模式 在生产环境(production)中不使用严格模式

 strict:process.env.NODE_ENV !== 'production',  
logger 插件

import createLogger from 'vuex/dist/logger'



mapMutation和 mapactions 会把 他们里面的方法直接映射到实力上面（this） 可以通过this.method直接调用
实例：
。。。mapMutations({add,}) 获取到就挂载在this上 可以通过this.add()获取到此方法
通过辅助函数拿到的值都会挂载在this上

跨域 请看config下的index文件

跨域
1.jsonp
2.cors 跨域资源共享
3.webpack代理跨域
4.postMeesage + ifreme
5.window.name+iframe
6.location.hash+iframe
7.ngix反向代理
8.websocket
9.document.domain 只适用于一级跨域和二级跨域




下载nginx

更改配置nginx.conf  更改head



localStorage    长期存在
						都保存在客户端 
sessionStorage   关闭就销毁



















# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
