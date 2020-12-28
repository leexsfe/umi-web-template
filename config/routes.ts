/**
* @description: 路由配置文件
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 14:04:15
**/
export default [
  { path: '/login', exact: true, title: '登录', component: '@/pages/login' },
  { 
    path: '/', 
    component: '@/components/Layout',
    wrappers: [
      '@/wrappers/auth',
    ],
    routes: [
      { path: '/', exact: true, title: 'dashbord', component: '@/pages/admin/dashbord' },
      { path: '/ucenter', exact: true, title: '用户中心', component: '@/pages/admin/ucenter' },
      { path: '/user/list', exact: true, title: '用户列表', component: '@/pages/admin/user/list' },
      { path: '/user/detail', exact: true, title: '用户详情', component: '@/pages/admin/user/detail' }
    ]
  },
];