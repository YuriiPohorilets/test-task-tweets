import { Typography, Box } from '@mui/material';
import {
  titleStyle,
  centredItemsStyles,
  subtitleStyle,
  typographyStyle,
  wrapperStyle,
  descriptionStyle,
} from 'shared/basicStyles';
import Icon from 'img/follow.png';

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          ...centredItemsStyles,
          gap: '30px',
          justifyContent: 'flex-start',
          mb: '28px',
          flexWrap: 'wrap',
        }}
      >
        <img src={Icon} alt="" width={90} height={90} />
        <Typography component="h1" sx={titleStyle}>
          Tweets
        </Typography>
      </Box>

      <Box sx={wrapperStyle}>
        <Typography sx={subtitleStyle}>This is how ChatGPT described this app:</Typography>

        <Typography sx={{ ...typographyStyle, mb: '16px' }}>
          <i>
            “It contains a collection of tweets that can be used to analyze social trends and
            popular topics. The website features tweets from various countries, allowing for the
            exploration of social habits and attitudes across different cultures. This website is an
            invaluable tool for sociologists, marketers, and anyone interested in social media and
            its impact on society.”
          </i>
        </Typography>

        <Typography sx={{ ...typographyStyle, fontSize: '24px', mb: '32px' }}>
          But in fact, this is a simple application with a nice design for managing tweets, there is
          an option to filter by follow status
        </Typography>

        <Typography fontSize={14}>
          Created by:{' '}
          <Typography
            component="a"
            href="https://github.com/YuriiPohorilets"
            target="_blank"
            sx={descriptionStyle}
          >
            Yurii Pohorilets
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
