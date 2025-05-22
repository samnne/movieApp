import "./css/App.css";
import Favorite from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content ">
        <BrowserRouter basename="/movieApp">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favorite />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
