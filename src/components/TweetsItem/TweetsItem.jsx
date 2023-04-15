import { Box, Typography, ListItem, Button } from '@mui/material';
import { buttonStyles, contentStyles, centredItemsStyles } from 'shared/basicStyles';
import {
  tweetsItemStyle,
  logoBoxStyle,
  logoStyle,
  dividerStyle,
  avatarBorderStyle,
  avatarBoxStyle,
  contentBoxStyle,
} from './tweetsItemStyles';
import ImageBg from 'assets/img-1.webp';
import Logo from 'assets/logo.svg';

export const TweetsItem = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow = false } = user;

  return (
    <ListItem component="li" sx={{ ...centredItemsStyles, ...tweetsItemStyle }}>
      <Box sx={logoBoxStyle}>
        <Box
          component="img"
          src={Logo}
          alt="Goit logo"
          width="76"
          height="22"
          loading="lazy"
          sx={logoStyle}
        />
        <img src={ImageBg} alt={name} width="308" height="168" loading="lazy" />
      </Box>

      <Box sx={dividerStyle}>
        <Box sx={{ ...centredItemsStyles, ...avatarBorderStyle }}>
          <Box sx={avatarBoxStyle}>
            <img src={avatar} alt="" width="62" height="62" loading="lazy" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ ...centredItemsStyles, ...contentBoxStyle }}>
        <Typography sx={{ ...contentStyles, color: 'primary.darker' }}>{name}</Typography>
        <Typography sx={contentStyles}>{tweets.toLocaleString()} tweets</Typography>
        <Typography sx={contentStyles}>{followers.toLocaleString()} followers</Typography>
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
