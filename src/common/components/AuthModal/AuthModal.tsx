import React, { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import * as Styled from './styles';
import { a11yProps } from './utils';
import { AuthModalProps } from './types';
import { TabPanel } from '../TabPanel/TabPanel';


export const AuthModal: FC<AuthModalProps> = ({ setIsVisibleModal }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };


  return (
    <Styled.Container>
      <Styled.Modal>
        <Box sx={{ bgcolor: 'background.paper', width: 440 }}>
          <AppBar position="static">
            <Styled.Tabs
              value={ value }
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              onChange={ handleChange }
            >
              <Tab label="Вход" { ...a11yProps(0) } />
              <Tab label="Регистрация" { ...a11yProps(1) } />
            </Styled.Tabs>
          </AppBar>
          <Box sx={{ bgcolor: 'background.paper', width: 440, padding: '20px' }}>
            <SwipeableViews
              axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
              index={ value }
              onChangeIndex={ handleChangeIndex }
            >
              <TabPanel value={ value } index={ 0 } dir={ theme.direction }>
                <Login setIsVisibleModal={ setIsVisibleModal } />
              </TabPanel>
              <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
                <div>
                  <Registration setIsVisibleModal={ setIsVisibleModal } />
                </div>
              </TabPanel>
            </SwipeableViews>
          </Box>
          <Button fullWidth onClick={ () => setIsVisibleModal(false) }>Закрыть окно</Button>
        </Box>
      </Styled.Modal>
    </Styled.Container>
  );
};
