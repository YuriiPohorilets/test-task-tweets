import { useLocation, Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { buttonStyle, iconStyle } from './goBackButtonStyles';

export const GoBackButton = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <Tooltip title="Previous page" placement="right" arrow>
      <Button component={Link} to={backLink} variant="outlined" sx={buttonStyle}>
        <ChevronLeftIcon sx={iconStyle} />
        Go Back
      </Button>
    </Tooltip>
  );
};
