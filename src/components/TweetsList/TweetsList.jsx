import { List } from '@mui/material';
import { TweetsItem } from 'components/TweetsItem/TweetsItem';

export const TweetsList = ({ users, onClick }) => {
  return (
    <List
      component="ul"
      sx={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', p: 0 }}
    >
      {users.map(user => {
        return <TweetsItem key={user.id} user={user} onClick={onClick} />;
      })}
    </List>
  );
};
