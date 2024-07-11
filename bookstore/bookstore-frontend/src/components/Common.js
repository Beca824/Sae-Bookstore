import React from "react";
import Navbar from './NavBar';
import { Outlet } from "react-router-dom";
import './Common.css';  // Import the CSS file

function Common(){
    return(
        <div className="flex flex-col">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Common;