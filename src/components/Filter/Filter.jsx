import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Fade from '@mui/material/Fade';
import { filterItems } from 'refs/filterItems';

export const Filter = () => {
  const [anchorEl, setAnchorEl] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FilterAltIcon sx={{ fontSize: '32px' }} />
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {filterItems.map(item => {
          return (
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
