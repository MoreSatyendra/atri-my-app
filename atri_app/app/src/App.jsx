import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/project" element={<Project />} />
<Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services />} />
    </Routes>
  );
}
