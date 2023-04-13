import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EBD8FF',
      darker: '#5CD3A8',
      accent: '#5736A3',
    },
    neutral: {
      main: '#373737',
      contrastText: '#fff',
      light: 'rgba(235, 216, 255, 1)',
    },
    secondary: {
      main: '#5736A3',
      accent: 'rgba(87, 54, 163, 0.2)',
      darker: 'rgba(92, 211, 167, 0.4)',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
