import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./windows/Home";
import Footer from "./components/Footer";
import Contact from "./windows/Contact";
import About from "./windows/About";
import WorkingSpace from "./windows/WorkingSpace";
import Blog from "./windows/blog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="mx-auto w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="co-working-space" element={<WorkingSpace />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
