/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
 	
  // mongodb 配置
  db: 'mongodb://127.0.0.1/test',
  db_name: 'test',


  session_secret: 'yijiebuyi_key_secret', // 务必修改
  auth_cookie_name: 'test',

  // 程序运行的端口
  port: 3009,
  hostname:'127.0.0.1',

  // 邮箱配置
  mail_opts: {
    host: 'smtp.mxhichina.com',
    port: 25,
    auth: {
      user: 'no-reply@sansiyue.com',
      pass: 'Xiaonei001'
    }
  }
};

module.exports = config;