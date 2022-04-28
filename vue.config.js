const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const { config } = require('process')

function resolve(dir) {
  return path.join(__dirname , dir)  
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:config => {
    config.resolve.alias
      .set("@",resolve("src"))
      .set("assets",resolve("src/assets"))
      .set("components",resolve("src/components"))
      .set("views",resolve("src/views"))

      .set("energy",resolve("src/views/energy"))
      .set("equipment",resolve("src/views/equipment"))
      .set("home",resolve("src/views/home"))
      .set("sensor",resolve("src/views/sensor"))
      

      .set("public",resolve("public"))
      .set("router",resolve("src/router"))


  },
  devServer: {  
    //代理服务器解决跨域
    proxy: {
        //会把请求路径中的/api换为后面的代理服务器
        '/api': {
            //提供数据的服务器地址
            target: 'http://150.158.37.65:8081',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },

        }
    },
  },

  
  lintOnSave:false
})
