import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const useCoinAPI = createApi({
  reducerPath: "useCoin",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // Add your authorization header here
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["coins"],
  endpoints: (builder) => ({
    PaymentCoins: builder.mutation({
      query: (amount: any) => ({
        url: "/coin_payment/",
        method: "POST",
        body: amount,
      }),
      invalidatesTags: ["coins"],
    }),
  }),
});

export const { usePaymentCoinsMutation } = useCoinAPI;
export default useCoinAPI;
