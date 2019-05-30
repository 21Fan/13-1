var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
      // {
      //   test: /\.css$/,
      //   loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      // },
      //json的loader配置
      
      {
        test:/\.json$/,
        loaders:['json-loader']
      },
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, "./public"),
    // publicPath:'/',
    // //host: "127.0.0.1",
    // port: "3001",
    // //overlay: true, // 浏览器页面上显示错误
    // // open: true, // 开启浏览器
    // // stats: "errors-only", //stats: "errors-only"表示只打印错误：
    // //hot: true, // 开启热更新
    // //服务器代理配置项
    proxy: {'/api/*':{
      target:"http://localhost:3001",
      secure: false
     } 
    }
  }
}
  
