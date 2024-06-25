import { combineReducers } from '@reduxjs/toolkit';

import user from './userReducer';
import orders from './ordersReducer';
import equipment from './equipmentReducer';


export const rootReducer = combineReducers({
  user,
  orders,
  equipment,
});
