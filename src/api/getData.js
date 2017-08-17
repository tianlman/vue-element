import fetch from '@/config/fetch'

/**
 * 功能模块
 */

export const getindexData = () => fetch('/indexData');

/**
 * 路由模块
 */

export const getrouteData = routeID => fetch('/indexData/'+routeID);


