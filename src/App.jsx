import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project"
import Members from "./components/Members"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-white">

      <Navbar />
      <Project/>
      <Members/>
      <Contact/>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
