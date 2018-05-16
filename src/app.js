//导入模块
const express=require('express')
const path=require('path')

//创建app对象 相当于http模块的server
const app=express()

//设置内置中间件，对我们的静态资源进行处理
app.use(express.static(path.join(__dirname,"statics")))

//获取请求信息,找到指定路由处理
const account=require(path.join(__dirname,'luyou/account.js'))
app.use('/account',account);

//设置端口,开启web服务
app.listen(7311,'127.0.0.1',err=>{
    if(err) console.log(err)
    console.log('ok');
})