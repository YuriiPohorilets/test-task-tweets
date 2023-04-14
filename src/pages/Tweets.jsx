import { useEffect } from 'react';
import { Box } from '@mui/material';
import { getUsers } from 'utils/usersApi';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Pagination } from 'components/Pagination/Pagination';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LS_KEY = 'users';

export const Tweets = () => {
  const [users, setUsers] = useLocalStorage('users', []);

  const handleFollow = userId => {
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId) {
          user.isFollow = !user.isFollow;
          user.followers = user.isFollow ? user.followers + 1 : user.followers - 1;
        }
        return user;
      })
    );
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers().then(setUsers);
    }

    localStorage.setItem(LS_KEY, JSON.stringify(users));
  }, [setUsers, users]);

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
      <Pagination />
    </Box>
  );
};
