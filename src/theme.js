import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
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
  },
});
