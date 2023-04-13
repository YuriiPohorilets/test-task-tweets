import { useEffect, useState } from 'react';
import { getUsers } from 'utils/usersApi';
import { TweetsList } from 'components/TweetsList/TweetsList';

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  console.log(users);

  return (
    <div>
      <TweetsList tweets={users} />
    </div>
  );
};
