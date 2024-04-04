import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LayoutUser from "./Layout/LayoutUser/LayoutUser";
// import HomePages from "./pages/Clients/Homepages/home";
import Ticket from "./pages/Clients/TICKET/Ticket";
// import BookingSeat from "./pages/Clients/TICKET - SEAT LAYOUT/seat";
// import Movie_About from "./pages/Clients/MOVIE-ABOUT/Movie-About";
// import Ticket from "./pages/Clients/TICKET/Ticket";
// import Movies from "./pages/Clients/Movies/Movies";
// import ResultPaymentCoin from "./components/Clients/ResultPaymentCoin/ResultPaymentCoin";
// import F_B from "./pages/Clients/F&B/F&B";
// import Cinema from "./pages/Clients/Cinema/Cinema";
// import Orther from "./pages/Clients/Orther/Orther";
// import ChoosePop from "./pages/Clients/ChoosePop/ChoosePop";

// import TicketBookingDetails from "./pages/Clients/Ticket-booking-details/TicketBookingDetails";
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ticket">Ticket</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LayoutUser />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
