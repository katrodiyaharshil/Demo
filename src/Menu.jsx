import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () =>{
    return(
        <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/contact">Contact</NavLink>
        </>
    )
}

export default Menu;