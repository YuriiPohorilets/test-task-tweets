import { Button } from '@mui/material';
import { buttonStyles } from 'shared/basicStyles';

export const LoadMoreButton = ({ onClick, loading }) => {
  return (
    <Button
      disabled={loading}
      sx={{ ...buttonStyles, bgcolor: 'secondary.darker' }}
      onClick={onClick}
    >
      {loading ? 'Loading...' : 'Load more'}
    </Button>
  );
};
