import { Box } from '@mui/material';
import { wrapperStyle } from './toolsBarSytles';

export const ToolsBar = ({ children }) => {
  return <Box sx={wrapperStyle}>{children}</Box>;
};
