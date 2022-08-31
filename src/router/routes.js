
// 路由全部采用懒加载
//路由配置信息
export default [
    {
        // 路由路径
        path: '/center',
        component: ()=>import('@/pages/Center'),
        meta: { show: true },
        // 二级路由
        children:[
            {
                path:'myorder',
                component:()=>import('@/pages/Center/myOrder'),
            },
            {
                path:'grouporder',
                component:()=>import('@/pages/Center/groupOrder')
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        // 路由路径
        path: '/paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/pay',
        component: ()=>import('@/pages/Pay'),
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // ...
            if(from.path == '/trade'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        // 路由路径
        path: '/trade',
        component: ()=>import('@/pages/Trade'),
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车来
            if(from.path == '/shopcart'){
                next();
            }else{
                // 其他路由组件而来，停留在当前页面
                next(false);
            }
        }
    },
    {
        // 路由路径
        path: '/shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess'),
        name:'addcartsuccess',
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/detail/:skuid',
        component: ()=>import('@/pages/Detail'),
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/home',
        // 此处路由采用懒加载
        component: ()=>import('@/pages/Home'),
        // 路由源信息
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search'),
        meta: { show: true },
        // name配置
        name: 'search'
    },
    {
        // 路由路径
        path: '/login',
        component: ()=>import('@/pages/Login'),
        meta: { show: false },
    },
    {
        // 路由路径
        path: '/register',
        component: ()=>import('@/pages/Register'),
        meta: { show: false },
    },
    // 路由重定向，在项目跑起来的时候，访问/,立马定向到首页
    {
        path: "*",
        redirect: "/home"
    }
];