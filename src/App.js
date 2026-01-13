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
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              {/* ✅ TEST HEADING */}
              <h1 style={{ textAlign: "center", color: "red" }}>
                THIS IS MY NEW PROJECT
              </h1>

              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="programs"><Programs /></section>
              <section id="impact"><Impact /></section>
              <section id="events"><Events /></section>
              <section id="contact"><Footer /></section>
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
