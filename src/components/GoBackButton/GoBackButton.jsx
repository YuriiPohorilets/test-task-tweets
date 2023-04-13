import { useLocation, Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const GoBackButton = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <Tooltip title="Previous page" placement="right" arrow>
      <Button
        component={Link}
        to={backLink}
        variant="outlined"
        sx={{
          '&:hover': { bgcolor: 'secondary.accent' },
          p: '6px 8px',
          fontWeight: 400,
          fontSize: '18px',
          color: 'primary.accent',
          lineHeight: 1.5,
          borderRadius: '4px',
          boxShadow: 'none',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: '32px', color: 'primary.accent' }} />
        Go Back
      </Button>
    </Tooltip>
  );
};
