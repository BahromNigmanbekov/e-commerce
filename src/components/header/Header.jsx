

import React, { useState } from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuTicketPercent } from "react-icons/lu";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";



function Header() {

  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      
      {isSubHeaderVisible && (
        <div className="subHeader">
          <div className="subHeaderTexts">
            <LuTicketPercent className="subHeaderTicket" />
            <p>30% off storewide — Limited time!</p>
            <NavLink to="/shop">
              <button className="subBtn">
                Shop Now <FaArrowRight />
              </button>
            </NavLink>
          </div>

          <button
            onClick={() => setIsSubHeaderVisible(false)}
            className="subHeaderCloseBox"
            aria-label="Close promo"
          >
            <IoCloseOutline />
          </button>
        </div>
      )}

      <header>
        <div className={`navBox ${!isSubHeaderVisible ? "zero" : ""}`}>
          <nav className={`navbar ${!isSubHeaderVisible ? "topZero" : ""}`}>
            <div className="container">
              <div className="containerTexts">
               
                <div className="logoElBox">
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="bar"
                    aria-label="Open menu"
                  >
                    <FaBars />
                  </button>

                  <NavLink to="/">
                    <h1 className="logoText">
                      Paxta<span className="gray">.</span>
                    </h1>
                  </NavLink>
                </div>

                <ul className={`navList ${isMenuOpen ? "menuActive" : ""}`}>
              
                  <div className="barListBox">
                    <h3>Paxta</h3>
                    <button
                      className="closeMenuBtn"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <IoCloseOutline />
                    </button>
                  </div>

                  {[
                    { path: "/", name: "Home" },
                    { path: "/shop", name: "Shop" },
                    { path: "/contact", name: "Contact Us" },
                  ].map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "active" : "navLink"
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                
                <ul className="navIconsList">
                  <RiSearchLine className="icon" aria-label="Search" />
                  <CgProfile className="icon" aria-label="Profile" />
                  <HiOutlineShoppingBag className="icon" aria-label="Cart" />
                
                </ul>

               
                {isMenuOpen && (
                  <div
                    className="overlay"
                    onClick={() => setIsMenuOpen(false)}
                  ></div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
