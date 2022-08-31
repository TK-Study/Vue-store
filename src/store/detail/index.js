import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份模块uuid-->生成一个随机字符串
import {getUUID} from '@/utils/uuid_token';

const state = {
    goodInfo: {},
    // 游客临时身份
    uuid_token:getUUID()
};

const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};

const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // 加入购物车返回的解构
        // 加入购物车以后（发请求），前台将参数带给服务器
        // 服务器写入数据库，并没有返回其他的数据，只是返回这次操作是否成功
        // 因为服务器没有返回其余数据，不用存入仓库
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // 代表服务器加入购物车成功
        if (result.code == 200) {
            return 'ok'
        } else {
            // 当前的这个函数如果执行返回promise
            return Promise.reject(new Error('faile'))
        }
    } 
};

// 简化数据
const getters = {
    //路径导航简化的数据
    categoryView(state) {
        // 当前计算出来的categoryView属性值至少是一个空对象，这样就不会出现假报错了
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}