/**
* @description: 运行时配置文件
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 14:02:48
**/
import UserServie from '@/services/user';
import { clearLoginData } from '@/utils/util';

// 修改路由
// export function patchRoutes({ routes }: any) {
//   console.log(221111, routes);
// }

// export function render(oldRender: any) {
//   console.log(222222);
//   oldRender();
// }

// 初始化数据
export async function getInitialState() {
  const user = await UserServie.getUser();
  return { user }
}

// 路由切换监听事件
export function onRouteChange({ matchedRoutes }: any) {
  if (matchedRoutes.length) {
    // 当前匹配路由
    const curRoute = matchedRoutes[matchedRoutes.length - 1];
    // 设置页面标题
    document.title = curRoute.route.title || '';
    // 如果跳转到登录页面，清除登录信息，如Cookie、缓存变量等
    if (curRoute && curRoute.path === '/login') {
      clearLoginData();
    }
  }
}