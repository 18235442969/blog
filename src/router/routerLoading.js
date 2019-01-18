/* * @Author: monkey  * @Date: 2019-01-18 15:16:30  * @Last Modified by:   monkey  * @Last Modified time: 2019-01-18 15:16:30  */
import React from 'react';
/**
 * @name 路由按需加载状态组件
 */
export default ({ isLoading, error }) => {
  if (isLoading) {
    return <div className="switch-bg">loading</div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};