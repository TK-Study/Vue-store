// home模块仓库
// 引入请求模块
import { reqCategoryList } from "@/api";

const state = {
        // 根据服务器返回值初始化仓库
        categoryList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST', result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}