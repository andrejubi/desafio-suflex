import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import FavoriteCharacters from "./pages/favorite-characters/favorite-characters";
import Logout from "./pages/logout";
import { isAuthenticated } from "./services/auth";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/detail/:characterId" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route
          element={isAuthenticated() ? <FavoriteCharacters /> : <Home />}
          path={isAuthenticated() ? "/favorite-characters" : "/"}
        />
        <Route element={<Logout />} path="/logout" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
