import React from "react";
import "./App.css";
import Navbar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies";

function App() {
  return (
    <div className="App" id="main">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default App;
