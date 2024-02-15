import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../features/Auth/redux/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api/',
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('content-type', 'application/json');
    headers.set('accept', 'application/json');
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('Sending refresh token ...');

    const refreshResult = await baseQuery(
      'auth/refresh-token',
      api,
      extraOptions
    );

    if (refreshResult?.error) {
      console.log('Refresh token failed');
      api.dispatch(logout());
      localStorage.removeItem('user');
    } else {
      console.log('Refresh token success');
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
