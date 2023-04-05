import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleBackPage = (page: string) => {
    setPage(page);
  };

  const handleNavBar = (toggleNavBar: boolean) => {
    setToggleNavBar(toggleNavBar);
  };

  const handleTrailer = (link: any) => {
    setLink(link);
    console.log(link);
  };

  const handleInfo = (title: string, description: string, img: string) => {
    setTitle(title);
    setDescription(description);
    setImg(img);
  };

  return (
    <>
      <Router>
        {toggleNavBar && <NavBar onNavBar={handleNavBar} />}
        <Routes>
          <Route index element={<Signup onNavBar={handleNavBar} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <Home
                onTrailer={handleTrailer}
                onBack={handleBackPage}
                onMoreInfo={handleInfo}
              />
            }
          />
          <Route
            path="/favourite"
            element={<Favourite onBack={handleBackPage} />}
          />
          <Route
            path="/moreInfo"
            element={
              <MoreInfo
                page={page}
                title={title}
                description={description}
                img={img}
              />
            }
          />
          <Route path="/trailer" element={<Trailer link={link} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
