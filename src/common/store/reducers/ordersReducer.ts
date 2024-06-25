import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiURL } from '@common/consts/api';
import { Order, OrderFormType } from '@common/types/order';


const addOrderThunk = createAsyncThunk(
  'orders/add',
  async (obj: OrderFormType) => {
    const res = await axios
      .post(
        `${apiURL}/order`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(({ data }) => data);
    return res;
  },
);

const deleteOrderThunk = createAsyncThunk(
  'orders/delete',
  async (obj: { id: number }) => {
    const res = await axios
      .delete(
        `${apiURL}/order/${obj.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(({ data }) => data);
    return res;
  },
);

const getUserOrdersThunk = createAsyncThunk(
  'orders/getUser',
  async () => {
    const res = await axios
      .get(`${apiURL}/order/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => data);
    return res;
  },
);

const getAllOrdersThunk = createAsyncThunk(
  'orders/getAll',
  async () => {
    const res = await axios
      .get(`${apiURL}/order`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => data);
    return res;
  },
);

const initialState: {
  isLoading: boolean;
  userOrders: Order[];
  allOrders: Order[];
} = {
  isLoading: false,
  userOrders: [],
  allOrders: [],
};


const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrderThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteOrderThunk.fulfilled, (state, action: PayloadAction<{ id: number }>) => {
      state.isLoading = false;
      state.userOrders = state.userOrders.filter((order) => order.id !== action.payload.id);
    });
    builder.addCase(getUserOrdersThunk.fulfilled, (state, action: PayloadAction<Order[]>) => {
      state.userOrders = action.payload;
    });
    builder.addCase(getAllOrdersThunk.fulfilled, (state, action: PayloadAction<Order[]>) => {
      state.allOrders = action.payload;
    });
  },

});

export {
  addOrderThunk, deleteOrderThunk, getUserOrdersThunk, getAllOrdersThunk,
};

export default ordersSlice.reducer;
