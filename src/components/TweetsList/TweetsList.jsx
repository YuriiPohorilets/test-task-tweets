import { List } from '@mui/material';
import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { listStyle } from './tweetsListStyles';

export const TweetsList = ({ users, onClick }) => {
  return (
    <List component="ul" sx={listStyle}>
      {users.map(user => {
        return <TweetsItem key={user.id} user={user} onClick={onClick} />;
      })}
    </List>
  );
};
