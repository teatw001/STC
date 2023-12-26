import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComments } from "../interface/model";

const commentsAPI = createApi({
  reducerPath: "comments",
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
  tagTypes: ["comment"],
  endpoints: (builder) => ({
    addCommentBlog: builder.mutation({
      query: (comment: IComments) => ({
        url: `/Blogs/${comment.id}/comments`,
        method: "POST",
        body: comment.content,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});
export const { useAddCommentBlogMutation } = commentsAPI;
export default commentsAPI;
