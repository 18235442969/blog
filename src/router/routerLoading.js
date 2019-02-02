/* * @Author: monkey  * @Date: 2019-01-18 15:16:30  * @Last Modified by:   monkey  * @Last Modified time: 2019-01-18 15:16:30  */
import React from 'react';
import '../index.css';
/**
 * @name 路由按需加载状态组件
 */
export default ({ isLoading, error }) => {
  if (isLoading) {
    return <div className="loading">
            <div className="spinner">
              <div className="spinner-container container1">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
              <div className="spinner-container container2">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
              <div className="spinner-container container3">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
            </div>
          </div>;
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};