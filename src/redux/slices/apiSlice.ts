import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCreated = createApi({
  reducerPath: "fetching-users",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => {
    return {
      getUsers: builder.query<any[], void>({
        query: () => "/users",
      }),
      setUsers: builder.mutation<any[], { names: string }>({
        query: (user) => ({
          url: "newuser",
          method: "POST",
          body: user,
        }),
      }),
    };
  },
});

export const { useGetUsersQuery,useSetUsersMutation } = apiCreated;
