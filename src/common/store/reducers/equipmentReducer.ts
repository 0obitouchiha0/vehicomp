import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiURL } from '@common/consts/api';
import { Equipment, EquipmentFormType } from '@common/types/equipment';


const addEquipmentThunk = createAsyncThunk(
  'equipment/add',
  async (obj: EquipmentFormType) => {
    const res = await axios
      .post(
        `${apiURL}/equipment`,
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

const deleteEquipmentThunk = createAsyncThunk(
  'equipment/delete',
  async (obj: { id: number }) => {
    const res = await axios
      .delete(
        `${apiURL}/equipment/${obj.id}`,
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

const getUserEquipmentThunk = createAsyncThunk(
  'equipment/getUser',
  async () => {
    const res = await axios
      .get(`${apiURL}/equipment/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => data);
    return res;
  },
);

const getAllEquipmentThunk = createAsyncThunk(
  'equipment/getAll',
  async () => {
    const res = await axios
      .get(`${apiURL}/equipment`, {
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
  userEquipment: Equipment[];
  allEquipment: Equipment[];
} = {
  isLoading: false,
  userEquipment: [],
  allEquipment: [],
};


const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEquipmentThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteEquipmentThunk.fulfilled, (state, action: PayloadAction<{ id: number }>) => {
      state.isLoading = false;
      state.userEquipment = state.userEquipment.filter((equipment) => equipment.id !== action.payload.id);
    });
    builder.addCase(getUserEquipmentThunk.fulfilled, (state, action: PayloadAction<Equipment[]>) => {
      state.userEquipment = action.payload;
    });
    builder.addCase(getAllEquipmentThunk.fulfilled, (state, action: PayloadAction<Equipment[]>) => {
      state.allEquipment = action.payload;
    });
  },
});

export {
  addEquipmentThunk, deleteEquipmentThunk, getUserEquipmentThunk, getAllEquipmentThunk,
};

export default equipmentSlice.reducer;
