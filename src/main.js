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
// 统一接收api文件夹里面的全部函数
import * as API from '@/api';
// 引入element-UI
import { Button, MessageBox } from 'element-ui';
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import GIF from '@/assets/1.gif'

Vue.config.productionTip = false





// 三级联动组件----全局组件
import TypeNav from '@/components/TypeNav'
// 轮播图
import Carousel from "@/components/Carousel"
// 分页器
import Pagination from "@/components/Pagination"

// 参数一：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
// 按需引入组件
Vue.component(Button.name, Button);
// ElementUI第二种注册方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 注册插件
Vue.use(VueLazyload, {
  // 默认懒加载图片
  loading: GIF
});
// 引入表单校验插件
import '@/plugins/validate';




new Vue({
  render: h => h(App),
  // 此时组件身上拥有$router属性
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
