<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- Footer组件在Home，Search中显式，在Login和Register中不显示 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'app',
  components:{Header,Footer},
  mounted(){
    // 派发一个action 获取商品分类的三级列表
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>