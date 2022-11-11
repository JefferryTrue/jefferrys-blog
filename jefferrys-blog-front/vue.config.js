const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:'http://127.0.0.1:3002',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api',
          '^/cmsmanager/api':'/api',
        }
      }
    }
  } 
})
