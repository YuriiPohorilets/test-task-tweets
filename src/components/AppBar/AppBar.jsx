import { Container, AppBar as AppBarMui } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { Filter } from 'components/Filter/Filter';

export const NavBar = () => {
  return (
    <AppBarMui sx={{ p: '8px 0', bgcolor: 'primary.accent' }}>
      <Container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}
      >
        <Navigation />
        <Filter />
      </Container>
    </AppBarMui>
  );
};
