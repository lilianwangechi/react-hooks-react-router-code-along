import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Messages from "./Messages";

import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";

function App(){
  return (
    <div>
<NavBar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/messages" element={<Messages/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
 
  </Routes>
  </div>
  );
}
export default App;