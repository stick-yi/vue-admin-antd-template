/* eslint-disable prettier/prettier */
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 设置开发环境代理
  devServer: {
    // 配置本地启动项目为https
    https: false,
    port: 8686,
    open: true // 自动打开浏览器
  },
  // 基本路径
  publicPath: './',
  // 支持less
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 配置
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 添加别名
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('@api', path.join(__dirname, 'src/api'));

    // 使用SVG
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear(); // 清除已有的所有loader
    svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });

    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/icons"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  }
};
