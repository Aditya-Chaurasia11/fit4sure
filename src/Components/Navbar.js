import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/"> Fit4sure</Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <NavLink to="/about">About Us</NavLink>
          </p>
          <p>
            <NavLink to="/services">Services</NavLink>
          </p>
          <p>
            <NavLink to="/carrers">Carrers</NavLink>
          </p>
          <p>
            <NavLink to="/contact">Contact Us</NavLink>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <NavLink to="/about">About Us</NavLink>
              </p>
              <p>
                <NavLink to="/services">Services</NavLink>
              </p>
              <p>
                <NavLink to="/carrers">Carrers</NavLink>
              </p>
              <p>
                <NavLink to="/contact">Contact Us</NavLink>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
