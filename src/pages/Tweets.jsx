import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getUsers, updateUser } from 'utils/usersApi';
import { isSameUser, compareArr } from 'utils/compareArray';
import { limit, lsKeys } from 'refs/constants';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { ToolsBar } from 'components/ToolsBar/ToolsBar';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { ToTopButton } from 'components/ToTopButton/ToTopButton';
import { centredItemsStyles } from 'shared/basicStyles';

export const Tweets = () => {
  const [users, setUsers] = useLocalStorage(lsKeys.users, []);
  const [filter, setFilter] = useLocalStorage(lsKeys.filter, ['Show all']);
  const [followings, setFollowings] = useLocalStorage(lsKeys.followings, []);
  const [page, setPage] = useState(1);
  // const [totalHits, setTotalHits] = useState(0);
  const [index, setIndex] = useState(limit);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffsetPage, setIsOffsetPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getUsers(page);

      setUsers(prevUsers => {
        const newUser = data.map(user => {
          if (followings.includes(user.id)) {
            return { ...user, isFollow: true };
          }
          return { ...user, isFollow: false };
        });

        const compareUsers = compareArr(prevUsers, data, isSameUser);

        return [...compareUsers, ...newUser];
      });

      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const offsetTrigger = 350;

    window.addEventListener('scroll', () => {
      window.scrollY > offsetTrigger ? setIsOffsetPage(true) : setIsOffsetPage(false);
    });
  }, []);

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

  const handleFilter = (value, closeMenufn, setSelectedItem) => {
    setFilter(value);
    setSelectedItem(value);
    setPage(1);
    setIndex(limit);
    closeMenufn(null);
  };

  const handleChangePage = () => {
    setPage(prevPage => prevPage + 1);
    setIndex(prevIndex => prevIndex + limit);
  };

  const filtredUsers = users
    .filter(user => {
      if (filter === 'Follow') return !user.isFollow;
      if (filter === 'Followings') return user.isFollow;

      return user;
    })
    .sort((a, b) => a.id - b.id)
    .splice(0, index);

  return (
    <Box sx={{ ...centredItemsStyles, flexDirection: 'column', gap: '28px' }}>
      <ToolsBar>
        <GoBackButton />
        <Filter value={filter} onChange={handleFilter} resetPage={setPage} />
      </ToolsBar>

      {users && <TweetsList users={filtredUsers} onClick={handleFollow} />}

      <LoadMoreButton loading={isLoading} onClick={handleChangePage} />

      {isOffsetPage && <ToTopButton />}
    </Box>
  );
};
