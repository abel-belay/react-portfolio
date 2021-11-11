import "./App.css";
import React from "react";

import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Intro />
        <About />
      </main>
    </React.Fragment>
  );
}

export default App;
