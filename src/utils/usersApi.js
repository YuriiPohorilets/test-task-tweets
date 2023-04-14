import axios from 'axios';

axios.defaults.baseURL = 'https://6436f7fc8205915d34019426.mockapi.io/api/';

const searchParams = new URLSearchParams({
  limit: 9,
});

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`/users?${searchParams}&p=${page}`);

  return data;
};
