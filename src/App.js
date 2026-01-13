import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="programs"><Programs /></section>
              <section id="impact"><Impact /></section>
              <section id="events"><Events /></section>
              <section id="contact"><Footer /></section>
            </>
          }
        />

        {/* About Us page */}
        <Route path="/about" element={<AboutUs />} />

        {/* Programs page */}
        <Route path="/programs" element={<Programs />} />

        {/* Events page */}
        <Route path="/events" element={<Events />} />

        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
