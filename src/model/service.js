/*
* @Author: monkey
* @Date:   2019-01-17 16:17:18
 * @Last Modified by: monkey
 * @Last Modified time: 2019-01-17 16:53:58
*/
import axios from 'axios';
import { apiConfig } from '../config';

// 网上测试
const baseUrl = apiConfig.baseUrl;
// 本地发布
// const baseUrl = 'http://192.168.1.111:9000'


const service = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})

service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log('Request Error' + error);
  return Promise.reject(error);
});

service.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('Response Error' + error);
  return Promise.reject(error);
});

export default service;
