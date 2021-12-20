import "./App.css";
import React from "react";

import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
    </React.Fragment>
  );
}

export default App;
