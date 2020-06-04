module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 是否在构建完成后打开默认浏览器
    host: 'localhost', //监听地址
    port: 8080, // 端口
    https: false, // 是否有必须通过https的服务
    proxy: {
      '/xyc': {
        target: 'http://10.119.158.83:8090',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/xyc': ''
        }
      }
    }
  }
}
