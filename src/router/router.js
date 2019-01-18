/* * @Author: monkey  * @Date: 2019-01-18 15:19:11  * @Last Modified by:   monkey  * @Last Modified time: 2019-01-18 15:19:11  */
const routers = [{
  path: '/app',
  component: () => import('../page/App/App'),
  routes: [
    {
      path: '/app/child',
      component: () => import('../page/App/Child'),
      exact: true
    },
    {
      path: '/app/haha',
      component: () => import('../page/App/Haha'),
      exact: true
    }
  ]
},{
  path: '/user',
  component: () => import('../page/User/User'),
}];

export default routers;