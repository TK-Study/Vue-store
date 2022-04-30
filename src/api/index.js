// 统一管理API接口管理
import requests from "./request";

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
