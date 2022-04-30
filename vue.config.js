const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法校验
  lintOnSave:false,
  // 代理跨域,配置代理服务器
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        // 路径重写
        // pathRewrite:{'^/api':''},
      }
    }
  }
})


