import { Button as ButtonMui } from '@mui/material';

export const Button = ({ children }) => {
  return (
    <ButtonMui
      variant="contained"
      sx={{
        '&:hover': { bgcolor: 'primary.darker', boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);' },
        p: '14px 56px',
        color: 'neutral.main',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: 1.22,
        borderRadius: '10px',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);',
      }}
    >
      {children}
    </ButtonMui>
  );
};
