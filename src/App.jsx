import "./css/App.css";
import Favorite from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content ">
        <Routes>
          <Route path="/movieApp/home" element={<Home />}></Route>
          <Route path="/movieApp/favourites" element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
