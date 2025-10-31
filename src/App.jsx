import React from "react";
import "./App.css";
import FrontPage from "./pages/FrontPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </>
  );
}

export default App;
