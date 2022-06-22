// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("Entered ORDEREDAPI")
// Define a service using a base URL and expected endpoints
export const orderedApi = createApi({
  reducerPath: "orderedApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `ordered`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQueryByOrdered } = orderedApi;
