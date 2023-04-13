import { List } from '@mui/material';
import { TweetsItem } from 'components/TweetsItem/TweetsItem';

export const TweetsList = ({ users }) => {
  return (
    <List
      component="ul"
      sx={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {users.map(user => {
        return <TweetsItem key={user.id} user={user} />;
      })}
    </List>
  );
};
