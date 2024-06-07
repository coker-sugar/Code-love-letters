const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 为解决以下两个文件需要重复引入的问题
  // 在此之前需要执行以下代码：vue add style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // __dirname绝对路径
        // +（解决文件需重复引入）
        path.join(__dirname, './src/assets/styles/variables.less'),
        // +（解决文件需重复引入）
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    client: {
      webSocketURL: 'ws://0.0.0.0:3000/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }

})