import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const refundAPI = createApi({
    reducerPath: "refund",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("authToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["rf"],
    endpoints: (builder) => ({
        SendRefund: builder.mutation({
            query: (catedetail: {id: string | number; password: string }) => ({
                url: `/refund_coin/${catedetail.id}`,
                method: "POST",
                body: catedetail,
            }),
            invalidatesTags: ["rf"],
        }),
    }),
});
export const { useSendRefundMutation } = refundAPI;
export default refundAPI;
