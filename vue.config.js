const webpack = require('webpack')
module.exports={
  devServer:{
    port:9696
  },
  chainWebpack:config =>{
    config.plugin('procide').use(webpack.ProvidePlugin,[{
      'window.Quill':'quill'
    }])
  }
}