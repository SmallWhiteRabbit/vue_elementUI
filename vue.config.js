const webpack = require('webpack')
module.exports={
  devServer:{
    port: 9696,
    proxy:'https://www.baidu.com',
    host:'admin.rampow.top',
  },
  chainWebpack:config =>{
    config.plugin('procide').use(webpack.ProvidePlugin,[{
      'window.Quill':'quill'
    }])
  }
}