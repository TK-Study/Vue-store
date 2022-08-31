// 二次封装axios
import axios from "axios";
// 在当前模块中引入store
import store from "@/store";

// 引入请求进度条
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'
// satrt:进度条开始 done：进度条结束




// 1.利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL:"/api",
    // 代表请求超时的时间5秒
    timeout:5000,
});

// 请求拦截器：在发送请求之前，请求拦截器可以监测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config:配置对象，对象里最重要的就是header请求头
    // 配置进度条开始
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    // 需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    // 配置进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    // 响应失败回调函数
    return Promise.reject(new Error('faile'));
 });


//对外暴露
export default requests;