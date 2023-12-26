import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IShowTime } from "../interface/model";

const showsAPI = createApi({
  reducerPath: "shows",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["show"],
  endpoints: (builder) => ({
    fetchShowTime: builder.query<IShowTime[], void>({
      query: () => "/time_detail/",
      providesTags: ["show"],
    }),
    getShowTimeById: builder.query<IShowTime, number | string>({
      query: (id) => `/time_detail/${id}`,
      providesTags: ["show"],
    }),
    getShowTimeByAdminCinema: builder.query<any, number | string>({
      query: (id) => `/get_time_detail_by_id_cinema/${id}`,
      providesTags: ["show"],
    }),
    getShowbyIdCinema: builder.query<any, number | string>({
      query: (id) => `/check_time_detail_by_film_id/${id}`,
      providesTags: ["show"],
    }),
    getAllDataShowTimeById: builder.query<any, number | string>({
      query: (id) => `/time_detail_get_by_id/${id}`,
      providesTags: ["show"],
    }),
    removeShowTime: builder.mutation({
      query: (id) => ({
        url: "/time_detail/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["show"],
    }),
    addShowTime: builder.mutation({
      query: (show: any) => ({
        url: "/time_detail/",
        method: "POST",
        body: show,
      }),
      invalidatesTags: ["show"],
    }),
    updateShowTime: builder.mutation({
      query: (show: IShowTime) => ({
        url: `/time_detail/${show.id}`,
        method: "PATCH",
        body: show,
      }),
      invalidatesTags: ["show"],
    }),
  }),
});
export const {
  useAddShowTimeMutation,
  useFetchShowTimeQuery,
  useGetShowTimeByIdQuery,
  useGetShowbyIdCinemaQuery,
  useRemoveShowTimeMutation,
  useUpdateShowTimeMutation,
  useGetAllDataShowTimeByIdQuery,
  useGetShowTimeByAdminCinemaQuery,
} = showsAPI;
export default showsAPI;
