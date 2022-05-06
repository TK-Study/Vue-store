// home模块仓库
// 引入请求模块
import { reqCategoryList, reqGetBannerList ,reqFloorList} from "@/api";

const state = {
    // 根据服务器返回值初始化仓库
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // floor组件的数据
    floorList:[]
};

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }
};

const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data);
        }
    },
    // 获取floor数组
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            // 提交commit
            commit('GETFLOORLIST', result.data)
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