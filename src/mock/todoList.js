/*
 * @Author: monkey 
 * @Date: 2019-01-17 16:31:55 
 * @Last Modified by:   monkey 
 * @Last Modified time: 2019-01-17 16:31:55 
 */
import Mock from 'mockjs';

Mock.mock(/\/todoList.mock/, {
  'success': true,
  'code': 0,
  'data': {
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'title': '前端人人@id',
      'status': 1
    }]
  },
  'message': '操作成功',
  'systemDate': new Date().getTime()
});
