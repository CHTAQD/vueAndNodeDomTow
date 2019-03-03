 let http = require('http');//node的http模块 node 自带的模块都可以直接用
 //createServer node 创建服务器的方法
 //req request 请求
 //ress response 响应
 //listen 监听 后面跟着端口号 0-65535
 //pathname是路径
 //res.setHeader 响应请求头
 //req.method 请求方式 都是大写的
 //请求方式有几种 GET POST DELETE PUT
 //require 服务器模块
 let fs = require('fs');
 fs.readFile(url,'utf-8',(err,data)=>{console.log(data)})
 http.createServer(function(req,res){
 	//query : {}
 	//pathname:'/'
 	//解决乱码
 	res.setHeader('content-type','text/plain;charset=utf-8');
 	let {query,pathname} = (url.parse(req.url,true));
 	console.log(query,pathname)


 	res.end('8080')
 }).listen(8080)

//node server.js
