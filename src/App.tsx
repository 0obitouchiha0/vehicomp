import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '@modules/home/views/Home/Home';
import { MyOrders } from '@modules/customer/views/MyOrders/MyOrders';
import { CreateOrder } from '@modules/customer/views/CreateOrder/CreateOrder';
import { useAppSelector } from '@common/store/store';
import { CreateEquipment } from '@modules/executor/views/CreateEquipment/CreateEquipment';
import { MyEquipment } from '@modules/executor/views/MyEquipment/MyEquipment';
import { AllOrders } from '@modules/executor/views/AllOrders/AllOrders';
import { AllEquipment } from '@modules/customer/views/AllEquipment/AllEquipment';
import { Cabinet } from '@modules/executor/views/Cabinet/Cabinet';
import { Users } from '@modules/admin/views/Users/Users';
import { AccountLayout } from '@common/components/AccountLayout/AccountLayout';


const App = () => {
  const { user } = useAppSelector((state) => state.user);
  const location = window.location.pathname;
  return (
    <>
      <Routes>
        <Route path="" element={ <Home /> } />
      </Routes>
      { location !== '/' && (
        <AccountLayout>
          <Routes>
            <Route path="main/cabinet" element={ <Cabinet /> } />
            <Route path="main/myorders" element={ <MyOrders /> } />
            <Route path="main/myequipment" element={ <MyEquipment /> } />
            <Route path="main/allorders" element={ <AllOrders /> } />
            <Route path="main/allequipment" element={ <AllEquipment /> } />
            <Route path="main/users" element={ <Users /> } />
            <Route path="main/create" element={ user?.role === 'customer' ? <CreateOrder /> : <CreateEquipment /> } />
          </Routes>
        </AccountLayout>
      ) }
    </>
  );
};

export default App;
