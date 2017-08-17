/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let baseUrl = '';
let routerMode = 'history';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://192.168.1.165:3000';
}else{
  baseUrl = 'http://192.168.1.165:3000';
}

export {
  baseUrl,
  routerMode,
}
