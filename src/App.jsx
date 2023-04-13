import React from "react";
import Home from "../pages/home";
import Update from "../pages/update";
import Delete from "../pages/delete";
import Create from "../pages/create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/" element={<Delete />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
