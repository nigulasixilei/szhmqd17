//导入模块
const express=require('express')
const path=require('path')

//创建路由对象
const luyou=express.Router();

//导入控制器
const accountluyou=require(path.join(__dirname,'../chuliqi/chuli.js'))

//接受请求,并交给对应得处理器
luyou.get('/login',accountluyou.getlogin)
luyou.get('/vcode',accountluyou.getloginimg)

//导出
module.exports=luyou