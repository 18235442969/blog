import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import RouterLoading from './routerLoading'

export default (data) => {
  return data.map(router => {
    let AsyncComponent = Loadable({
      loader: router.component,
      loading: RouterLoading
    });
    return router.exact ? <Route exact path={router.path} render={props => (
            <AsyncComponent {...props} routes={router.routes}></AsyncComponent>
          )} key={router.path} /> : <Route path={router.path} render={props => (
            <AsyncComponent {...props} routes={router.routes}></AsyncComponent>
          )} key={router.path} /> 
  })
}

