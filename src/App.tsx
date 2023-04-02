import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/signup";
import Register from "./pages/register";
import Home from "./pages/home";
import Favourite from "./pages/favourite";
import MoreInfo from "./pages/moreInfo";
import Trailer from "./pages/trailer";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
          <li>
            <Link to="/moreInfo">moreInfo</Link>
          </li>
          <li>
            <Link to="/trailer">Trailer</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
