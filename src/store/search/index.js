import { reqGetSearchInfo } from "@/api";
// search模块仓库
const state = {
    // 仓库初始对象
    searchList:{}
};

const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList;
    }
};

const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            commit('GETSEARCHLIST', result.data);
        }
    }
};
// 项目中的getters主要的作用是：简化仓库中的数据
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}