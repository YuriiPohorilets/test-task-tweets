import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';
import { routesList } from 'refs/routesList';

export const Navigation = () => {
  return (
    <Box component="nav">
      <List sx={{ display: 'flex', gap: '8px', p: 0 }}>
        {routesList.map(({ name, path }) => {
          return (
            <ListItem key={name} sx={{ p: 0, width: 'auto' }}>
              <Button
                component={NavLink}
                to={path}
                sx={{
                  '&.active': { bgcolor: 'neutral.light', color: 'primary.accent' },
                  p: '6px 24px',
                  fontWeight: 500,
                  fontSize: '18px',
                  color: 'neutral.contrastText',
                  textTransform: 'uppercase',
                  borderRadius: '10px',
                }}
              >
                {name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
