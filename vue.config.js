const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const proxy = require('./src/proxy')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.VUE_APP_NODE_ENV !== 'location' ? '/' : './', // 基本路径 如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  outputDir: `dist/${process.env.VUE_APP_PROJECT_NAME}`, // 输出文件目录
  assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  lintOnSave: process.env.NODE_ENV !== 'production', // eslint-loader 是否在保存的时候检查
  productionSourceMap: process.env.NODE_ENV !== 'location', // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin Default: 生产环境下是 true，开发环境下是 false
    // sourceMap: false, // 开启 CSS source maps? default  false
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/variable.scss"; '
      }
    },
    requireModuleExtension: false // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: config => {
    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
    // moment忽略其他语言包
    config
      .plugin('ignore')
      .use(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/))
    // 配置路劲别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@comp', resolve('src/components'))
    // 打包分析
    if (process.env.VUE_APP_IS_ANALYZE) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    // 压缩打包后文件
    if ((process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test')) {
      config
        .plugin('compress')
        .use(FileManagerPlugin, [
          {
            onEnd: {
              delete: [
                './dist/*zip'
              ],
              archive: [
                { source: './dist', destination: `./dist/${process.env.VUE_APP_PROJECT_NAME}.zip` }
              ]
            }
          }
        ])
    }
    // lodash 优化
    config
      .plugin('lodash-webpack-plugin')
      .use(LodashModuleReplacementPlugin)
  },
  configureWebpack: config => {
    // 生产包gzip 压缩
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      )
    }
  },
  // 第三方插件配置
  pluginOptions: {
  },
  // 配置babel转换
  transpileDependencies: [
    'view-design'
  ],
  ...proxy
}
