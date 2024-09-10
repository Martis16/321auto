import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Header/>
        <App />
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
