const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        component: () => import('@/pages/layouts/baseLayout.vue'), //.vue不能省略
    }
]
export default routes