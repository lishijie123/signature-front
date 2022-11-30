const NotFound = () => import('../pages/notFound/NotFound.vue') // 404 页面
const MainLayout = () => import('../pages/layouts/mainLayout.vue') // 404 页面

// 签署管理
const Papers = () => import('../pages/signature/papers/index.vue') // 文件发起

const routes = [
  {
    path: '/',
    name: 'index',
    title: '签章平台',
    component: () => import('@/pages/layouts/baseLayout.vue'), //.vue不能省略
    redirect: { name: 'signature' },
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
        component: MainLayout,
        redirect: { name: 'papers' },
        children: [
          {
            path: 'papers',
            title: '文件发起',
            name: 'papers',
            component: Papers
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
        component: MainLayout,
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