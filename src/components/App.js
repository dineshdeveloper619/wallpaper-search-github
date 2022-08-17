import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";
import "./App.css"



class App extends React.Component{

  render(){
  return(
<Router>
    <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</Router>



  )
}
}

export default App;