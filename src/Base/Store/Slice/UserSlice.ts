import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../Network/models/GenericModels';


const initialUserData: UserState = {
  PUB_INFO: null,
  BUNDLE: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserData,
  reducers: {
    setUser: (state, action) => {
      const user: UserState = {
        PUB_INFO: JSON.parse(JSON.stringify(action.payload.PUB_INFO || '')),
        BUNDLE: action.payload.BUNDLE
      };
      return { ...state, ...user };
    },
    setSessionId: (state, action: PayloadAction<string>) => {
      state.PUB_INFO = {
        sessionId: action.payload,
        platform: state.PUB_INFO?.platform ?? '',
        AdId: state.PUB_INFO?.AdId ?? '',
        appId: state.PUB_INFO?.appId ?? '',
        lang: state.PUB_INFO?.lang ?? '',
        osType: state.PUB_INFO?.osType ?? '',
        serviceId: state.PUB_INFO?.serviceId ?? '',
        timestamp: state.PUB_INFO?.timestamp ?? '',
        customerId: state.PUB_INFO?.customerId ?? '',
        darkMode: state.PUB_INFO?.darkMode ?? false
      }
      return state;
    }
  },
});

export const {
  setUser,
  setSessionId
} = userSlice.actions;

export default userSlice.reducer;