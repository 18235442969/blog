/* * @Author: monkey  * @Date: 2019-01-18 15:32:33  * @Last Modified by:   monkey  * @Last Modified time: 2019-01-18 15:32:33  */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouterMap from './routerMap'
import routers from './router';

const routerList = RouterMap(routers);

export default ()=>{
  return(
      <Switch>
        { routerList }
        <Redirect to="/app" />
      </Switch>
  )
}
