import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export type StoreState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, StoreState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch
