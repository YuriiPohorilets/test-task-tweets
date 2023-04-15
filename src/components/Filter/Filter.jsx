import { useState } from 'react';
import { Button, Menu, MenuItem, Tooltip, Typography, Fade } from '@mui/material';
import { FilterAlt } from '@mui/icons-material/';
import { statusFilters } from 'refs/constants';
import { buttonFilterStyle, textStyle, iconFilterStyle, menuItemsStyle } from './filterStyles';

export const Filter = ({ value = 'Show all', onChange }) => {
  const [anchorEl, setAnchorEl] = useState('');
  const [selectedItem, setSelectedItem] = useState(value);

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
        {statusFilters.map(item => {
          return (
            <MenuItem
              key={item}
              disabled={item === selectedItem}
              selected={item === selectedItem}
              onClick={() => {
                onChange(item, setAnchorEl, setSelectedItem);
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
