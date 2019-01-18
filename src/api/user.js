import service from '../model/service'


const getUserInfo = ({name}) => {
  let data = {
    name
  };
  return service.post('/todoList', data);
}

const getUser = ({name}) => {
  let data = {
    name
  };
  return service.post('/user', data);
}

export {
  getUserInfo,
  getUser
};