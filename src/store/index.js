//该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);

//引入仓库
import home from './home'
import search from './search';

//创建并暴露store
export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search
    }
})
