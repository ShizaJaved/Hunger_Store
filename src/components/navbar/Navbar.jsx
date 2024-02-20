import React from 'react'
import "./Navbar.css"
import logo from "./logo.png"
import { FaCartShopping } from "react-icons/fa6";

import {Link} from "react-scroll"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#fff8f6]">
      <div className="logo">
        <NavLink to="/"><img src={logo} alt="" /></NavLink>
      </div>

      <div className="list">
      <NavLink to="/">
      <h3>Menu</h3>
      </NavLink>
       
       <Link to='about'> <h3>About</h3></Link>

        <Link to="contact">
          <h3>Contact</h3>
        </Link>
      </div>

      <div className="cart">
        <NavLink to="/cart">
          <span>
            <FaCartShopping />
          </span>
        </NavLink>
      </div>
    </nav>
  );}

export default Navbar