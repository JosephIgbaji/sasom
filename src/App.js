import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./windows/Home";
import Footer from "./components/Footer";
import Contact from "./windows/Contact";
import About from "./windows/About";

function App() {
  return (
    <div className="mx-auto w-full">
      <Navbar />

      {/* <Home />
      <Contact />
      <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
