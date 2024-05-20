import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../services/features/ProductSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi, rtkQueryErrorLogger } from '../services';

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, rtkQueryErrorLogger),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
