import React from "react";
import profile from "../images/profile.jpg" 
import "./App.css"

const About=()=>{
    return(
      <div className="About-container">
        <img src={profile} alt="profile" id="profile-image"></img>
        <h1>DINESH KUMAR</h1>
        <p>Hi... I am a Web Developer and Editor.I am Self_taught Programmer.Try to learn differnt technologies in web development.
            Now i am doing freelancing for Websites and Video editing.</p>
      </div>
    )
  }

export default About;