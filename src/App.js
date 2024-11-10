import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import Careerup from './Components/Careerup';
import Portfolio from "./Components/Portfolio_mern";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>
          <Route index element={<Careerup />} />
            <Route path="careerup" element={<Careerup />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
