const lazyLoad = (name, index = false) => () => import(`@/view/${name}${index ? '/index' : ''}.vue`)

export default [
  {
    path: '/login',
    name: 'login',
    component: lazyLoad('Error')
  },
  {
    path: '/home',
    name: 'home',
    component: lazyLoad('HelloWorld')
  },
  {
    path: '/404',
    name: 'error_404',
    component: lazyLoad('Error')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    redirect: '/home'
  }
]
