import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './user.login.register.slice';

export * from './user.login.register.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});