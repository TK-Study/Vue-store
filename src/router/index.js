// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
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
    routes:[
        {
            // 路由路径
            path:'/home',
            component:Home,
            // 路由源信息
            meta:{show:true},
        },
        {
            // 路由路径
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            // name配置
            name:'search'
        },
        {
            // 路由路径
            path:'/login',
            component:Login,
            meta:{show:false},
        },
        {
            // 路由路径
            path:'/register',
            component:Register,
            meta:{show:false},
        },
        // 路由重定向，在项目跑起来的时候，访问/,立马定向到首页
        {
            path:"*",
            redirect:"/home"
        }
    ]
})