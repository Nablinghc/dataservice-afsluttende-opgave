import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="topnav" id="myTopnav">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Monarker">Monarker</NavLink>


            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>
        </nav>
    )
}

export default NavBar
