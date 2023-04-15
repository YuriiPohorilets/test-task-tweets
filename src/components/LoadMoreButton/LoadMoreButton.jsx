import { Button } from '@mui/material';
import { buttonStyles } from 'shared/basicStyles';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <Button sx={{ ...buttonStyles, bgcolor: 'secondary.darker' }} onClick={onClick}>
      Load more
    </Button>
  );
};
