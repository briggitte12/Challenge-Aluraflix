import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddVideo from "./pages/addVideo";
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-video" element={<AddVideo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

