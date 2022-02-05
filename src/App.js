import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <Intro />
                <About />
                <Projects />
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
