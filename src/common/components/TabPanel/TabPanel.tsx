import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { TabPanelProps } from './types';


export const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={ value !== index }
    id={ `full-width-tabpanel-${index}` }
    aria-labelledby={ `full-width-tab-${index}` }
    { ...other }
  >
    { value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{ children }</Typography>
      </Box>
    ) }
  </div>
);
