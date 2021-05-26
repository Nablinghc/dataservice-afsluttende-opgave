import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="topnav" id="myTopnav">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Monarker">Monarker</NavLink>
            <NavLink to="/Monark">Monark</NavLink>
            <NavLink to="/MonarkerSoegning">MonarkerSoegning</NavLink>
            <NavLink to="/MonarkOpret">MonarkOpret</NavLink>
            <NavLink to="/MonarkAdmin">MonarkAdmin</NavLink>
            <NavLink to="/MonarkRet">MonarkRet</NavLink>
            <NavLink to="/Vejret">Vejret</NavLink>
            <NavLink to="/Nyheder">Nyheder</NavLink>


            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>
        </nav>
    )
}

export default NavBar
