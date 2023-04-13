import { useLocation, Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const GoBackButton = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <Button
      component={Link}
      to={backLink}
      variant="contained"
      sx={{
        '&:hover': {
          bgcolor: 'primary.darker',
          // boxShadow: 'none'
        },
        p: '16px 36px',
        bgcolor: 'secondary.darker',
        color: 'neutral.main',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: 1.02,
        borderRadius: '10px',
        boxShadow: 'none',
      }}
    >
      Go back
    </Button>
  );
};
