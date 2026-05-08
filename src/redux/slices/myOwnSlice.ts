import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchedData = createApi({
  reducerPath: "myownUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/paginated",
  }),
  endpoints: (builder) => {
    return {
      getAllUsers: builder.query<Record<string, unknown>, number | void>({
        query: (start = 1) => `?start=${start}&limit=3`,
      }),
    };
  },
});

export const { useGetAllUsersQuery } = fetchedData;
