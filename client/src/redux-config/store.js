import { configureStore } from '@reduxjs/toolkit'
import { authentication } from './reducers/authentication.reducer';
import { registration } from './reducers/registration.reducer';
export default configureStore({
  reducer: {authentication,registration}
});