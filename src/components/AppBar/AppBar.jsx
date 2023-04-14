import { Container, AppBar as AppBarMui } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { centredItemsStyles } from 'shared/basicStyles';

export const NavBar = () => {
  return (
    <AppBarMui sx={{ p: '8px 0', bgcolor: 'primary.accent' }}>
      <Container sx={{ ...centredItemsStyles, justifyContent: 'space-between', gap: '24px' }}>
        <Navigation />
      </Container>
    </AppBarMui>
  );
};
