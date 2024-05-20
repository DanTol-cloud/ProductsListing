import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import type { ProductInterface } from '../types';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const err =
        'data' in action.error
          ? (action.error.data as { message: string }).message
          : action.error.message;
      console.warn(`Action have got been rejected, with status`, err);
      return 'data' in action.error
        ? (action.error.data as { message: string }).message
        : action.error.message;
    }

    return next(action);
  };

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductInterface[], void>({
      query: () => '/products.json',
    }),

    getProductsById: builder.query<ProductInterface, string>({
      query: (id: string) => `/products.json`,
      //@ts-ignore
      transformResponse: (
        baseQueryReturnValue: ProductInterface[],
        _,
        arg
      ): ProductInterface | undefined => {
        return baseQueryReturnValue.find((product) => product.id === arg);
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
