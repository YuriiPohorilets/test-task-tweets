import axios from 'axios';

axios.defaults.baseURL = 'https://6436f7fc8205915d34019426.mockapi.io/api/';

const searchParams = new URLSearchParams({
  limit: 9,
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
    const { data } = await axios.patch(
      `/users/${userId}`,
      { followers: userFollowers },
      {
        headers: { 'content-type': 'application/json' },
      }
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
