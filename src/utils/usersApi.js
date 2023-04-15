import axios from 'axios';
import { limit } from 'refs/constants';

axios.defaults.baseURL = 'https://6436f7fc8205915d34019426.mockapi.io/api/';

const searchParams = new URLSearchParams({
  limit,
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (userId, userFollowers) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, { followers: userFollowers });

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
