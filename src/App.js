import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import "./Media.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Night from "./images/moon.png";
import Day from "./images/sun.png";

export default function App() {
  const [day, setDay] = useState(Night);
  const [theme, setTheme] = useState("");
  const shift =()=>{
    if(day==Night){
      setDay(Day);
      setTheme("dark-mode");
    }
    else{
      setDay(Night);
      setTheme("");
    }
  }
  return (
    <>
      <main className={theme}>
      <div id="mySidenav" class="sidenav">
        {<img src={day} onClick={shift}/>}
      </div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
