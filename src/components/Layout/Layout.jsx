import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { NavBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <NavBar />

      <Box component="main" sx={{ pt: '28px', pb: '60px' }}>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
