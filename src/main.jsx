import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "./favouritesSlice.js";
const store = configureStore({
  reducer: { favourite: favouritesSlice },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/movieApp">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
