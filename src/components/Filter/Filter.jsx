import { useState } from 'react';
import { Button, Menu, MenuItem, Tooltip, Typography, Fade } from '@mui/material';
import { FilterAlt } from '@mui/icons-material/';
import { statusFilters } from 'refs/constants';
import { buttonFilterStyle, textStyle, iconFilterStyle, menuItemsStyle } from './filterStyles';

export const Filter = ({ value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Filter" placement="left" arrow>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={buttonFilterStyle}
        >
          <Typography sx={textStyle}>{value}</Typography>
          <FilterAlt sx={iconFilterStyle} />
        </Button>
      </Tooltip>

      <Menu
        id="fade-menu"
        MenuListProps={{ 'aria-labelledby': 'fade-button' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {statusFilters.map((item, index) => {
          return (
            <MenuItem
              key={item}
              disabled={index === selectedIndex}
              selected={index === selectedIndex}
              onClick={() => {
                onChange(item, index, setAnchorEl, setSelectedIndex);
              }}
              sx={menuItemsStyle}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
