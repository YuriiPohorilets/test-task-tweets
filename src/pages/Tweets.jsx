import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getUsers, updateUser } from 'utils/usersApi';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { centredItemsStyles } from 'shared/basicStyles';

// const LS_KEY = 'users';

export const Tweets = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('Show all');
  const [isLoading, setIsLoading] = useState(false);
  // const [followings, setFollowings] = useLocalStorage('followings', []);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await getUsers(page);
      setUsers(prevUsers => (page === 1 ? data : [...prevUsers, ...data]));

      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleFollow = async userId => {
    // setFollowings(prevFollowings => {
    //   const index = prevFollowings.indexOf(userId);

    //   if (index === -1) {
    //     return [...prevFollowings, { id: userId }];
    //   } else {
    //     prevFollowings.splice(index, 1);
    //     return [...prevFollowings];
    //   }
    // });

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

  const handleFilter = (value, closeMenufn) => {
    setFilter(value);
    closeMenufn(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Box
      sx={{
        ...centredItemsStyles,
        flexDirection: 'column',
        gap: '28px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          width: '100%',
        }}
      >
        <GoBackButton />
        <Filter value={filter} onChange={handleFilter} />
      </Box>

      {users && <TweetsList users={users} onClick={handleFollow} />}

      {isLoading && <CircularProgress color="secondary" />}
      <LoadMore disabled={isLoading} onClick={handleLoadMore} />
    </Box>
  );
};
