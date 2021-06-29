// 覆盖webpack的配置  配置文件更改后需要重启服务器
module.exports = {
  // 自定义服务配置
  devServer: {
    open: true
    //固定端口
    //port: 3000,
  },
  //关闭eslint检查
  lintOnSave: false
};
