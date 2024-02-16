import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../features/Auth/redux/authSlice';
import Cookies from 'js-cookie'; 

const baseQuery : any = fetchBaseQuery ({
  baseUrl: 'http://localhost:8080/api/',
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = Cookies.get('access_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('content-type', 'application/json');
    headers.set('accept', 'application/json');
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result;

  try {
    result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {
      console.log('Received 403 response, attempting token refresh...');

      const refreshResult = await baseQuery('auth/refresh', api, extraOptions);

      if (refreshResult?.error) {
        console.log('Refresh token failed:', refreshResult.error);

        api.dispatch(logout());
        Cookies.remove('access_token');
      } else {
        console.log('Token refresh success, retrying original request...');
        result = await baseQuery(args, api, extraOptions);
      }
    }
  } catch (error) {
    console.error('Error occurred during request:', error);

  }


  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
