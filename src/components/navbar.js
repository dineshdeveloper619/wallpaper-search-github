import React from "react";
import "./App.css"

const Navbar =()=>{
    return(
        
        <nav>
                <div className="Left">
                    <h3>HD<span>wallpapers.com</span></h3>
                </div>
                <div className="right">
                    <a href="/home">Home</a>
                    <a href="./about">About</a>
                    <a href="./contact">Contact</a>
                </div>
            </nav>
    )
}

export default Navbar;