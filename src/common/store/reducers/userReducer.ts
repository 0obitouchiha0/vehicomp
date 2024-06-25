import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiURL } from '@common/consts/api';
import { RegInfo, LoginInfo, User, UpdateInfo, UserResponse } from '@common/types/user';


const loginThunk = createAsyncThunk(
  'user/login',
  async (user: LoginInfo) => {
    const res = await axios
      .post(`${apiURL}/user/login`, {
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        return data.user;
      });
    return res;
  },
);

const regThunk = createAsyncThunk(
  'user/registration',
  async (user: RegInfo) => {
    const res = await axios
      .post(`${apiURL}/user/registrate`, {
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .then(() => axios
        .post(`${apiURL}/user/login`, {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          return data.user;
        }));
    return res;
  },
);

const authThunk = createAsyncThunk(
  'user/auth',
  async () => {
    const res = await axios
      .get(`${apiURL}/user/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        return data.user;
      });
    return res;
  },
);

const updateUserThunk = createAsyncThunk(
  'user/update',
  async (user: UpdateInfo) => {
    const res = await axios
      .patch(`${apiURL}/user`, user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => data.user);
    return res;
  },
);

const getUsersThunk = createAsyncThunk(
  'user/getUsers',
  async () => {
    const res = await axios
      .get(`${apiURL}/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data }) => data);
    return res;
  },
);

const initialState: {
  auth: boolean;
  user: User | null;
  users: UserResponse[];
} = {
  auth: false,
  user: null,
  users: [],
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      state.auth = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.auth = true;
    });
    builder.addCase(regThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.auth = true;
    });
    builder.addCase(authThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.auth = true;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action: PayloadAction<UserResponse[]>) => {
      state.users = action.payload;
    });
  },

});

export const { logout } = userSlice.actions;

export {
  loginThunk, regThunk, authThunk, updateUserThunk, getUsersThunk,
};

export default userSlice.reducer;
