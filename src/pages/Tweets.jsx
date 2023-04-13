import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getUsers } from 'utils/usersApi';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Pagination } from 'components/Pagination/Pagination';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

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

      <TweetsList users={users} />
      <Pagination />
    </Box>
  );
};
