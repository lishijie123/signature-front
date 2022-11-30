const NotFound = () => import('../pages/notFound/NotFound.vue') // 404 页面

const routes = [
  {
    path: '/',
    name: 'index',
    title: '签章平台',
    component: () => import('@/pages/layouts/baseLayout.vue'), //.vue不能省略
    children: [
      {
        path: 'home',
        title: '业务首页',
        name: 'home',
        component: NotFound
      },
      {
        path: 'signature',
        title: '签署管理',
        name: 'signature',
        component: NotFound,
        children: [
          {
            path: 'papers',
            title: '文件发起',
            name: 'papers',
            component: NotFound
          },
          {
            path: 'formwork',
            title: '模板发起',
            name: 'formwork',
            component: NotFound
          },
          {
            path: 'sign-task',
            title: '签署任务',
            name: 'SignTask',
            component: NotFound
          }
        ]
      },
      {
        path: 'seal',
        title: '印章管理',
        name: 'seal',
        component: NotFound,
        children: [
          {
            path: 'corporate',
            title: '企业印章管理',
            name: 'corporateSeal',
            component: NotFound
          },
          {
            path: 'personal',
            title: '个人印章管理',
            name: 'personalSeal',
            component: NotFound
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: () => import('../pages/notFound/NotFound.vue')
  }
]
export default routes