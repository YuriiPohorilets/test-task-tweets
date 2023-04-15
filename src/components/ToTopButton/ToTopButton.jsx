import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { fabStyle } from './toTopButtonStyles';

export const ToTopButton = () => {
  const onTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fab onClick={onTopScroll} size="large" aria-label="to top" sx={fabStyle}>
      <UpIcon />
    </Fab>
  );
};
