import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getUsers, updateUser } from 'utils/usersApi';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { ToolsBar } from 'components/ToolsBar/ToolsBar';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';
import { Pagination } from 'components/Pagination/Pagination';
import { centredItemsStyles } from 'shared/basicStyles';

export const Tweets = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useLocalStorage('filter', ['Show all']);
  const [totalHits, setTotalHits] = useState(10);
  const [followings, setFollowings] = useLocalStorage('followings', []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers(page);

      setUsers(() => {
        const newUser = data.map(user => {
          if (followings.includes(user.id)) {
            return { ...user, isFollow: true };
          }
          return { ...user, isFollow: false };
        });

        return [...newUser];
      });
    };

    fetchData().then(setTotalHits(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleFollow = async userId => {
    setFollowings(prevFollowings => {
      const index = prevFollowings.indexOf(userId);

      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === userId) {
            user.isFollow = !user.isFollow;
            user.followers = user.isFollow ? user.followers + 1 : user.followers - 1;
          }
          return user;
        })
      );

      if (index === -1 || prevFollowings.lenght === 0) {
        return [...prevFollowings, userId];
      } else {
        prevFollowings.splice(index, 1);
        return [...prevFollowings];
      }
    });

    const [user] = users.filter(user => user.id === userId);
    updateUser(userId, user.followers);
  };

  const handleFilter = (value, index, closeMenufn, setIndex) => {
    setFilter(value);
    setIndex(index);
    closeMenufn(null);
  };

  const handleChangePage = (_, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const filtredUsers = users.filter(user => {
    if (filter === 'Follow') return !user.isFollow;
    if (filter === 'Followings') return user.isFollow;

    return user;
  });

  return (
    <Box sx={{ ...centredItemsStyles, flexDirection: 'column', gap: '28px' }}>
      <ToolsBar>
        <GoBackButton />

        <Filter value={filter} onChange={handleFilter} />
      </ToolsBar>

      {users && <TweetsList users={filtredUsers} onClick={handleFollow} />}

      <Pagination onChange={handleChangePage} totalHits={totalHits} />
    </Box>
  );
};
