// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
//路由配置信息
export default [
    {
        // 路由路径
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/home',
        component: Home,
        // 路由源信息
        meta: { show: true },
    },
    {
        // 路由路径
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        // name配置
        name: 'search'
    },
    {
        // 路由路径
        path: '/login',
        component: Login,
        meta: { show: false },
    },
    {
        // 路由路径
        path: '/register',
        component: Register,
        meta: { show: false },
    },
    // 路由重定向，在项目跑起来的时候，访问/,立马定向到首页
    {
        path: "*",
        redirect: "/home"
    }
];