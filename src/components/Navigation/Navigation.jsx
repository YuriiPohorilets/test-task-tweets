import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';
import { routesList } from 'refs/constants';
import { navListStyle, navItemStyle, buttonStyle } from './navigationStyles';

export const Navigation = () => {
  return (
    <Box component="nav">
      <List sx={navListStyle}>
        {routesList.map(({ name, path }) => {
          return (
            <ListItem key={name} sx={navItemStyle}>
              <Button component={NavLink} to={path} sx={buttonStyle}>
                {name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
