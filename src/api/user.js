import service from '../model/service'
import '../mock/todoList';


const getUserInfo = ({name}) => {
  let data = {
    name
  };
  return service.post('/todoList', data);
}

export {
  getUserInfo
};