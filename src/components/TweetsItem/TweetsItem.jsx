import { Box, Typography, ListItem, Button } from '@mui/material';
import ImageBg from 'assets/img-1.webp';

export const TweetsItem = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow = false } = user;

  const contentStyles = {
    color: 'primary.main',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: 1.2,
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  const buttonStyles = {
    '&:hover': { bgcolor: 'primary.darker', boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);' },
    p: '14px 56px',
    color: 'neutral.main',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: 1.22,
    borderRadius: '10px',
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25);',
  };

  return (
    <ListItem
      component="li"
      sx={{
        flexBasis: 'calc((100% - 64px) / 3)',
        minWidth: '300px',
        p: '26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '36px',
        backgroundImage: 'linear-gradient(115deg, #471CA9 -1%, #5736A3 54%, #4B2A99 79%);',
        borderRadius: '20px',
        boxShadow: '-3px 7px 21px rgba(0, 0, 0, 0.23)',
        overflow: 'hidden',
      }}
    >
      <Box>
        <img src={ImageBg} alt={name} width="308" height="168" />
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '130%',
          height: '8px',
          bgcolor: '#EBD8FF',
          boxShadow:
            '0px 3px 3px rgba(0, 0, 0, 0.1), inset 0px -2px 3px #AE7BE3, inset 0px 3px 3px #FBF8FF;',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#EBD8FF',
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 4px #AE7BE3, inset 0px 4px 3px #FBF8FF;',
            borderRadius: '50%',
          }}
        >
          <Box
            sx={{
              borderRadius: '50%',
              bgcolor: 'primary.accent',
              overflow: 'hidden',
            }}
          >
            <img src={avatar} alt="" width="62" height="62" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: '26px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <Typography sx={{ ...contentStyles, color: 'primary.darker' }}>{name}</Typography>
        <Typography sx={{ ...contentStyles }}>{tweets.toLocaleString()} tweets</Typography>
        <Typography sx={{ ...contentStyles }}>{followers.toLocaleString()} followers</Typography>
      </Box>

      <Button
        onClick={() => onClick(id)}
        variant="contained"
        sx={{ ...buttonStyles, ...(isFollow ? { bgcolor: 'primary.darker' } : {}) }}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </ListItem>
  );
};
