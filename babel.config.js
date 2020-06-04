module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [['import', {
    libraryName: 'view-design',
    libraryDirectory: 'src/components'
  }], // view-design 按需引入
  '@babel/transform-runtime', 'transform-vue-jsx', 'lodash', // lodash按需引入
  'equire' // babel-plugin-equire 用于echart按需引入
  ]
}
