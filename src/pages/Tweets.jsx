import { useEffect, useState } from 'react';
import { getUsers } from 'utils/usersApi';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Pagination } from 'components/Pagination/Pagination';
import { Box } from '@mui/material';

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
        gap: '48px',
      }}
    >
      <TweetsList users={users} />
      <Pagination />
    </Box>
  );
};
