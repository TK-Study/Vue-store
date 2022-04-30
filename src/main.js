import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'
Vue.config.productionTip = false

// 三级联动组件----全局组件
import TypeNav from '@/components/TypeNav'
// 参数一：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);


new Vue({
  render: h => h(App),
  // 此时组件身上拥有$router属性
  router,
  store
}).$mount('#app')
