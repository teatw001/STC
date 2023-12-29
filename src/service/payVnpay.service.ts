import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const payAPI = createApi({
  reducerPath: "pays",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stcinemas.id.vn/api/",
    prepareHeaders: (headers) => {
      // Add your authorization header here
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["pay"],
  endpoints: (builder) => ({
    SendPaymentVnPay: builder.mutation({
      query: (amount: any) => ({
        url: "/Payment/",
        method: "POST",
        body: amount,
      }),
      invalidatesTags: ["pay"],
    }),
  }),
});

export const { useSendPaymentVnPayMutation } = payAPI;
export default payAPI;
