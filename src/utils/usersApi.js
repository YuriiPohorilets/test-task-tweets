import axios from 'axios';

axios.defaults.baseURL = 'https://6436f7fc8205915d34019426.mockapi.io/api/';

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`/users?limit=${9}&p=${page}`);

  return data;
};
