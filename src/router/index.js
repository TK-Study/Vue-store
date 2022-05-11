// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

// 使用插件
Vue.use(VueRouter)

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReolace

//重写push和replace
// 第一个参数：告诉原来push方法，你往哪里跳
// 第二个参数：成功回调
// 第三个参数：失败回调
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        // call || apply区别
        // 相同点：都可以调用一次函数，都可以篡改函数的上下文一次
        // 不同点：call和apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve,reject);
    }else{
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}
VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        originReolace.call(this, location, resolve, reject);
    }else{
        originReolace.call(this, location, ()=>{ }, ()=>{})
    }
}

export default new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition){
        // 代表滚动条在最上方
        return{y:0}
    },
})