import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <Provider store={store}>
   <App />
  </Provider>
 </StrictMode>
);