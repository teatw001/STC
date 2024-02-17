import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import filmsAPI from "../service/films.service";
import categorysAPI from "../service/cate.service";

import cinemasAPI from "../service/brand.service";
import showsAPI from "../service/show.service";
import foodAPI from "../service/food.service";
import movieRoomAPI from "../service/movieroom.service";
import selectedCinemaReducer from "../components/CinemaSlice/selectedCinemaSlice";
import TKinformationReducer from "../components/CinemaSlice/selectSeat";
import PaymentmethodReducer from "../components/ChoosePayment/ChoosePayment";

import timesAPI from "../service/time.service";
import bookTicketsAPI from "../service/book_ticket.service";
import cateDetailAPI from "../service/catedetail.service";
import bookingSeatAPI from "../service/chairs.service";
import authReducer from "../components/CinemaSlice/authSlice";
import usersAPI from "../service/signup_login.service";
import payAPI from "../service/payVnpay.service";

import { analyticApi } from "../service/analytic.service";
import vouchersAPI from "../service/voucher.service";
import seatkepingAPI from "../service/seatkeping.service";
import sendEmailAPI from "../service/sendEmail.service";
import payMoMoAPI from "../service/payMoMo.service";
import memberAPI from "../service/member.service";
// import blogsAPI from "../service/blog.service";
import commentsAPI from "../service/commentBlog.service";
import refundAPI from "../service/refund.service";
import commentsFilmAPI from "../service/commentfilm.service";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    films: filmsAPI.reducer,
    cates: categorysAPI.reducer,
    cinemas: cinemasAPI.reducer,
    vouchers: vouchersAPI.reducer,
    shows: showsAPI.reducer,
    times: timesAPI.reducer,
    pays: payAPI.reducer,
    bookTickets: bookTicketsAPI.reducer,
    foods: foodAPI.reducer,
    seatKeping: seatkepingAPI.reducer,
    movies: movieRoomAPI.reducer,
    paymentmomo: payMoMoAPI.reducer,
    catedetails: cateDetailAPI.reducer,
    bkseats: bookingSeatAPI.reducer,
    sendEmail: sendEmailAPI.reducer,
    selectedCinema: selectedCinemaReducer,
    TKinformation: TKinformationReducer,
    commentsfilm: commentsFilmAPI.reducer,
    Paymentmethod: PaymentmethodReducer,
    users: usersAPI.reducer,
    // blogs: blogsAPI.reducer,
    comments: commentsAPI.reducer,
    refund: refundAPI.reducer,
    auth: authReducer,
    [analyticApi.reducerPath]: analyticApi.reducer,
    [memberAPI.reducerPath]: memberAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filmsAPI.middleware as any,
      categorysAPI.middleware as any,
      bookingSeatAPI.middleware as any,
      cinemasAPI.middleware as any,
      showsAPI.middleware as any,
      seatkepingAPI.middleware as any,
      timesAPI.middleware as any,
      sendEmailAPI.middleware as any,
      vouchersAPI.middleware as any,
      payAPI.middleware as any,
      payMoMoAPI.middleware as any,
      bookTicketsAPI.middleware as any,
      foodAPI.middleware as any,
      movieRoomAPI.middleware as any,
      cateDetailAPI.middleware as any,
      usersAPI.middleware as any,
      commentsFilmAPI.middleware as any,
      analyticApi.middleware as any,
      memberAPI.middleware as any,
      // blogsAPI.middleware as any,
      commentsAPI.middleware as any,
      refundAPI.middleware as any
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// const persistor = persistStore(store);

// export {  persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
