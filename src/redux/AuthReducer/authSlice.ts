import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {authApi} from '../../services/auth';

export interface AuthState {
  name: string;
  email: string;
  password: string;
  token: string;
}

const initialState: AuthState = {
  name: '',
  email: '',
  password: 'levanphieu@99gmail.com',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        state.token = action.payload.idToken;
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        console.log('rejected', action);
      });
  },
});

// Action creators are generated for each case reducer function
export const {changeName} = authSlice.actions;

export default authSlice.reducer;
