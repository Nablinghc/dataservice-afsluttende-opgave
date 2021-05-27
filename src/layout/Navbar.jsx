import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="topnav" id="myTopnav">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Monark">Monark</NavLink>
            <NavLink to="/Monarker">Monarker</NavLink>
            <NavLink to="/MonarkerSoegning">MonarkerSoegning</NavLink>
            <NavLink to="/MonarkOpret">MonarkOpret</NavLink>
            <NavLink to="/MonarkAdmin">MonarkAdmin</NavLink>
            <NavLink to="/Vejret">Vejret</NavLink>
            <NavLink to="/Nyheder">Nyheder</NavLink>

        </nav>
    )
}

export default NavBar
