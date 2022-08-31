// 配置路由
import store from '@/store';
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

let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition){
        // 代表滚动条在最上方
        return{y:0}
    },
});
// 全局守卫，前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next)=>{
    // 用户登录了，才会有token,未登录一定不会有token
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 用户已经登录
    if(token){
        // 用户已经登录了还想去login是没办法的
        if(to.path == '/login'){
            next('/home')
        }else{
            // 登录了，去的不是login
            if(name){
                next();
            }else{
                // 没有用户信息，派发action让仓库存储用户信息在跳转
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // token失效了获取不到用户的信息
                    // 清除token
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    }else{
        // 未登录,不能去交易相关、支付相关、个人中心相关的页面
        let toPath = to.path;
        if(toPath.indexOf('/trade')!==-1 || toPath.indexOf('/pay')!==-1 || toPath.indexOf('/center')!==-1){
            // 未登录下点击的页面登录后直接跳转
            next('/login?redirect='+toPath);
        }else{
            // 去的不是上面这些路由就放行
            next();
        }
    }
})


export default router;