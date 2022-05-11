import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'
// 引入MockServer.js----mock数据
import "@/mock/mockServe";
//引入swiper样式 
import 'swiper/css/swiper.css'


Vue.config.productionTip = false





// 三级联动组件----全局组件
import TypeNav from '@/components/TypeNav'
// 轮播图
import Carousel from "@/components/Carousel"
// 分页器
import Pagination from "@/components/Pagination"

// 参数一：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);


new Vue({
  render: h => h(App),
  // 此时组件身上拥有$router属性
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
