/*
 * @Author: monkey 
 * @Date: 2019-01-17 16:31:55 
 * @Last Modified by: monkey
 * @Last Modified time: 2019-01-18 11:04:38
 */
import Mock from 'mockjs';

Mock.mock('/user', {
  'success': true,
  'code': 0,
  'data': {
    'user': 'hzy'
  },
  'message': '操作成功',
  'systemDate': new Date().getTime()
});