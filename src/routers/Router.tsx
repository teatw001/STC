// import { createBrowserRouter } from "react-router-dom";
// import LayoutUser from "../Layout/LayoutUser/LayoutUser";
// import HomePages from "../pages/Clients/Homepages/home";
// import BookingSeat from "../pages/Clients/TICKET - SEAT LAYOUT/seat";
// import Movie_About from "../pages/Clients/MOVIE-ABOUT/Movie-About";
// import Ticket from "../pages/Clients/TICKET/Ticket";
// import Movies from "../pages/Clients/Movies/Movies";
// import ResultPaymentCoin from "../components/Clients/ResultPaymentCoin/ResultPaymentCoin";
// import Cinema from "../pages/Clients/Cinema/Cinema";
// import F_B from "../pages/Clients/F&B/F&B";
// import Orther from "../pages/Clients/Orther/Orther";
// import ChoosePop from "../pages/Clients/ChoosePop/ChoosePop";
// import TicketBookingDetails from "../pages/Clients/Ticket-booking-details/TicketBookingDetails";
// import LayoutProfile from "../Layout/LayoutUser/LayoutProfile";
// import Profile from "../pages/Clients/Profile/Profile";
// import BookTicketUser from "../pages/Clients/BookTicketUser/BookTicketUser";
// import MemberInfo from "../pages/Clients/member-info/member-info";
// import ForgotPassword from "../pages/Clients/Forgot-password";
// import ResetPassword from "../pages/Clients/Reset-password/reset-password";
// import LayoutAdmin from "../Layout/LayoutAdmin/LayoutAdmin";
// import ListFilm from "../pages/Admin/ListFilm/ListFilm";
// import ListVouchers from "../pages/Admin/Vouchers/ListVouchers";
// import MemberInfoAdmin from "../pages/Admin/Members/Members";
// import Dashbroad_Admin_Cinema from "../pages/Admin/Dashbroad/Dashboard-Admin_Cinema";

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <LayoutUser />,
//       children: [
//         {
//           path: "/",
//           element: <HomePages />,
//         },
//         {
//           path: "/book-ticket/:id",
//           element: <BookingSeat />,
//         },
//         {
//           path: "/movie_about/:id",
//           element: <Movie_About />,
//         },
//         {
//           path: "/ticket",
//           element: <Ticket />,
//         },
//         {
//           path: "/movies",
//           element: <Movies />,
//         },
//         {
//           path: "/resultpaymentcoins",
//           element: <ResultPaymentCoin />,
//         },
//         {
//           path: "/F&B",
//           element: <F_B />,
//         },
//         {
//           path: "/cinema",
//           element: <Cinema />,
//         },
//         {
//           path: "/orther",
//           element: <Orther />,
//         },
//         {
//           path: "/choosepop",
//           element: <ChoosePop />,
//         },
//         {
//           path: "/Tiketbookingdetail",
//           element: <TicketBookingDetails />,
//         },
//         // {
//         //   path: "/blog/:id",
//         //   element: <BlogsDetail />,
//         // },
//         {
//           path: "/info_account",
//           element: <LayoutProfile />,
//           children: [
//             {
//               path: "", // Đường dẫn mặc định khi truy cập /info_account
//               element: <Profile />,
//             },
//             {
//               path: "profile", // Đường dẫn mặc định khi truy cập /info_account
//               element: <Profile />,
//             },
//             {
//               path: "BookTicketUser",
//               element: <BookTicketUser />,
//             },
//             {
//               path: "member-info",
//               element: <MemberInfo />,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: "/forgot-password",
//       element: <ForgotPassword />,
//     },
//     {
//       path: "/reset-password",
//       element: <ResetPassword />,
//     },
//     {
//       path: "/admin",
//       element: <LayoutAdmin />,

//       children: [
//         {
//           path: "/admin/listfilm",
//           element: <ListFilm />,
//         },
//         {
//           path: "members",
//           element: <MemberInfoAdmin />,
//         },
//         {
//           path: "/admin/vouchers",
//           element: <ListVouchers />,
//         },
//         {
//           index: true,
//           element: dashbroadElement,
//         },
//         {
//           path: "/admin/dashboards/:cinemaId",
//           element: <Dashbroad_Admin_Cinema />,
//         },
//         {
//           path: "/admin/staff",
//           element: <Dashboard_Staff />,
//         },
//         {
//           path: "/admin/book_ticket",
//           element: <ListBookTicket />,
//         },
//         {
//           path: "/admin/listcate",
//           element: <ListCate />,
//         },
//         {
//           path: "/admin/time",
//           element: <ListTime />,
//         },
//         {
//           path: "/admin/cinema",
//           element: <ListCinema />,
//         },
//         {
//           path: "/admin/show",
//           element: <ListShow />,
//         },
//         {
//           path: "/admin/movieroom",
//           element: <ListMovieRoom />,
//         },
//         {
//           path: "/admin/food",
//           element: <ListFood />,
//         },
//         {
//           path: "/admin/category_detail",
//           element: <ListCateDetail />,
//         },
//         {
//           path: "/admin/user",
//           element: <ListUser />,
//         },
//         {
//           path: "/admin/blogs",
//           element: <ListBlog />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/payment/:id_code",
//       element: <Payment />,
//     },
//     {
//       path: "/PayMentMoMo/:id_code",
//       element: <PaymentMomo />,
//     },
//     {
//       path: "/ResultNapTien/:id",
//       element: <ResultSuccess />,
//     },
//     {
//       path: "/*",
//       element: <NotFound />,
//     },
//   ]);