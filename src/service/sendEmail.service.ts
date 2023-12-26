import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sendEmailAPI = createApi({
  reducerPath: "sendEmail",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stcinemas.id.vn/api/",
    prepareHeaders: (headers, { getState }) => {
      // Add your authorization header here
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["send"],
  endpoints: (builder) => ({
    SendEmail: builder.mutation({
      query: () => ({
        url: "/send-book-ticket-details-email/",
        method: "POST",
      }),
      invalidatesTags: ["send"],
    }),
  }),
});
export const { useSendEmailMutation } = sendEmailAPI;
export default sendEmailAPI;
