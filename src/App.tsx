import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LayoutUser from "./Layout/LayoutUser/LayoutUser";
const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">TwittersView</Link> &nbsp;
      <Link to="/articles">ArticlesView</Link> &nbsp;
      <Link to="/notes">NotesView</Link>
      <Routes>
        <Route path="/" element={<LayoutUser />} />
        {/* <Route path="/articles" element={<ArticlesView />} />
        <Route path="/notes" element={<NotesView />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
