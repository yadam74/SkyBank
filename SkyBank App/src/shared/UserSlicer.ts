import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserModel } from '../components/models/UserModel';
import { RootState } from './store';

const initialState: IUserModel = {
  id: 0,
  firstName: '',
  middleInitial: '',
  lastName: '',
  ssn: '',
  email: '',
  phoneNumber: '',
  country: '',
  state: '',
  city: '',
  zipcode: '',
  username: '',
  password: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserModel>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.middleInitial = action.payload.middleInitial;
      state.lastName = action.payload.lastName;
      state.ssn = action.payload.ssn;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.country = action.payload.country;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.zipcode = action.payload.zipcode;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    setDefault: (state) => {
      state.id = 0;
      state.firstName = '';
      state.middleInitial = '';
      state.lastName = '';
      state.ssn = '';
      state.email = '';
      state.phoneNumber = '';
      state.country = '';
      state.state = '';
      state.city = '';
      state.zipcode = '';
      state.username = '';
      state.password = '';
    },
  },
});

export const { setUser, setDefault } = UserSlice.actions;
export default UserSlice.reducer;
export const selectUser = (state: RootState) => state.user;
