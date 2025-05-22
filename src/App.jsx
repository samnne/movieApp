import "./css/App.css";
import Favorite from "./pages/Favourites";
import Home from "./pages/Home";
import {  Route, BrowserRouter } from "react-router-dom";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content ">
        <BrowserRouter basename="/movieApp">
          
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favorite />} />
          
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
