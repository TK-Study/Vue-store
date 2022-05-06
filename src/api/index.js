// 统一管理API接口管理
import requests from "./request";
// 模拟数据发送请求
import mockRequests from './mockAjax'

// 三级联动接口
// 请求地址 GET 无参
// /api/product/getBaseCategoryList
export const reqCategoryList = ()=>{
    // 发请求:axios发请求返回结果是Promise对象
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')





// 获取搜索模块数据  
// 请求地址 POST  需带参数
// /api/list
// 当前这个接口(获取搜索模块的数据),给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
})