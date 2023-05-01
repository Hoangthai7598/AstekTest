import {ILoginProps, ILoginResponse} from '../models/AuthModel';
import {api} from './api';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResponse, ILoginProps>({
      query(creadentials) {
        return {
          url: `accounts:signInWithPassword?key=AIzaSyB1ls5Akfs462N0f8YSHOYmo47yB8j5ago`,
          method: 'POST',
          body: creadentials,
        };
      },
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  endpoints: {login},
} = authApi;

export const {useLoginMutation} = authApi;
