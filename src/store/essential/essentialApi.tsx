import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const appName = "essentialApi";
export const essentialService = createApi({
  reducerPath: "essentialService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_NEXT_API_URL + "/essential/",
    prepareHeaders: (headers, { getState }) => {
      const storedToken = localStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken) : null;
      if (token) {
        headers.set("authorization", `Bearer ${token.access}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}/`,
        method: "GET",
      }),
    }),
  }),
  // This is where you declare your tag types.
});

// Export hooks for usage in functional components
export const { useFetchUserByIdQuery } = essentialService;
