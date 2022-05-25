import { Component } from "react";
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <div class="nav">
            <h1>AMM</h1>
            <div class="links">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/%" className='nav-link'>Contact</Link>
            <Link to="/$" className='nav-link'>Learning</Link>
            </div>
        </div>
    )
}

export default Navbar;