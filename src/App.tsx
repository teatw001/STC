import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./Layout/LayoutUser/LayoutUser";
import HomePages from "./pages/Clients/Homepages/home";
import BookingSeat from "./pages/Clients/TICKET - SEAT LAYOUT/seat";
import Movie_About from "./pages/Clients/MOVIE-ABOUT/Movie-About";
import Ticket from "./pages/Clients/TICKET/Ticket";
import Movies from "./pages/Clients/Movies/Movies";
// import ResultPaymentCoin from "./components/Clients/ResultPaymentCoin/ResultPaymentCoin";
import F_B from "./pages/Clients/F&B/F&B";
import Cinema from "./pages/Clients/Cinema/Cinema";
import Orther from "./pages/Clients/Orther/Orther";
import ChoosePop from "./pages/Clients/ChoosePop/ChoosePop";

import TicketBookingDetails from "./pages/Clients/Ticket-booking-details/TicketBookingDetails";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Link to="/">TwittersView</Link> &nbsp;
      <Link to="/articles">ArticlesView</Link> &nbsp;
      <Link to="/notes">NotesView</Link> */}
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/book-ticket/:id" element={<BookingSeat />} />
          <Route path="/movie_about/:id" element={<Movie_About />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/resultpaymentcoins" element={<ResultPaymentCoin />} /> */}
          <Route path="/F&B" element={<F_B />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/orther" element={<Orther />} />
          <Route path="/choosepop" element={<ChoosePop />} />
          <Route
            path="/Tiketbookingdetail"
            element={<TicketBookingDetails />}
          />
          {/* <Route path="/blog/:id" element={<BlogsDetail/>} /> */}
          <Route path="/F&B" element={<F_B />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
