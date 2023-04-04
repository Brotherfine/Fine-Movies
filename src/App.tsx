import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/signup";
import Register from "./pages/register";
import Home from "./pages/home";
import Favourite from "./pages/favourite";
import MoreInfo from "./pages/moreInfo";
import Trailer from "./pages/trailer";
import NotFound from "./pages/notFound";
import NavBar from "./components/navBar";

function App() {
  const [page, setPage] = useState("");
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleBackPage = (page: string) => {
    setPage(page);
  };

  const handleNavBar = (toggleNavBar: boolean) => {
    setToggleNavBar(toggleNavBar);
  };

  return (
    <>
      <Router>
        {toggleNavBar && <NavBar onNavBar={handleNavBar} />}
        <Routes>
          <Route index element={<Signup onNavBar={handleNavBar} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home onBack={handleBackPage} />} />
          <Route
            path="/favourite"
            element={<Favourite onBack={handleBackPage} />}
          />
          <Route path="/moreInfo" element={<MoreInfo page={page} />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
