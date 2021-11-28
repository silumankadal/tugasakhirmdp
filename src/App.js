import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HiHome } from "react-icons/hi";
import {HiOutlineHome} from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BiDetail } from "react-icons/bi";

import "./App.css";
import Catfacts from "./pages/catfacts";
import Profile from "./pages/profile";
import Detail from "./pages/detail";
import Facts from "./pages/facts";
import About from "./pages/about";

function App() {
  

  
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Cat Facts</p>
      </header>
      <Routes>
        <Route path="/" element={<Catfacts />}/>
        <Route path="/catfacts" element={<Catfacts/>}/>         
        <Route path="/profile" element={<Profile />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/facts" element={<Facts />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <footer>
        <NavLink to="/catfacts" className="iconWrapper">
          <HiHome className="icon" />
          Catfacts
        </NavLink>
        <NavLink to="/facts" className="iconWrapper">
          <HiOutlineHome className="icon" />
          Dogfacts
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
        <NavLink to="/detail" className="iconWrapper">
          <BiDetail className="icon" />
          Detail
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <FcAbout className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
  }

export default App;
