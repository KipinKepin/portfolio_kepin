import { Link, useLocation } from "react-router-dom";
import "../component_style/Navbar.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        window.scrollY >= 100 ? setColor(true) : setColor(false);
    };

    window.addEventListener("scroll", changeColor);

    // Get the current location
    const location = useLocation();

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Kipinnn.</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                        onClick={handleClick}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "active" : ""}
                        onClick={handleClick}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project"
                        className={location.pathname === "/project" ? "active" : ""}
                        onClick={handleClick}
                    >
                        Project
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "active" : ""}
                        onClick={handleClick}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;