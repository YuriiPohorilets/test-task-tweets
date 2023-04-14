import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getUsers, updateUser } from 'utils/usersApi';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Pagination } from 'components/Pagination/Pagination';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';

// const LS_KEY = 'users';

export const Tweets = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [page, setPage] = useState('1');
  // const [followings, setFollowings] = useLocalStorage('users', []);

  const handleFollow = async userId => {
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId) {
          user.isFollow = !user.isFollow;
          user.followers = user.isFollow ? user.followers + 1 : user.followers - 1;
          updateUser(userId, user.followers);
        }
        return user;
      })
    );
  };

  const changePage = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    getUsers(page).then(setUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
        }}
      >
        <GoBackButton />
        <Filter />
      </Box>

      <TweetsList users={users} onClick={handleFollow} />
      <Pagination onChange={changePage} />
    </Box>
  );
};
