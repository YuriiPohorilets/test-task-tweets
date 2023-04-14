import { Box, Typography, ListItem, Button } from '@mui/material';
import { buttonStyles, contentStyles, centredItemsStyles } from 'shared/basicStyles';
import ImageBg from 'assets/img-1.webp';
import Logo from 'assets/logo.svg';

export const TweetsItem = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow = false } = user;

  return (
    <ListItem
      component="li"
      sx={{
        ...centredItemsStyles,
        flexBasis: 'calc((100% - 64px) / 3)',
        minWidth: '300px',
        p: '26px',
        flexDirection: 'column',
        gap: '36px',
        backgroundImage: 'linear-gradient(115deg, #471CA9 -1%, #5736A3 54%, #4B2A99 79%);',
        borderRadius: '20px',
        boxShadow: '-3px 7px 21px rgba(0, 0, 0, 0.23)',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={Logo}
          alt="GoIT logo"
          width="76"
          height="22"
          loading="lazy"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
        <img src={ImageBg} alt={name} width="308" height="168" loading="lazy" />
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
            ...centredItemsStyles,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
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
            <img src={avatar} alt="" width="62" height="62" loading="lazy" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          ...centredItemsStyles,
          mt: '26px',
          flexDirection: 'column',
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
