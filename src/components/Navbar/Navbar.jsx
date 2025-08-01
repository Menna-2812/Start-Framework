import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="position-fixed top-0 start-0 w-100 py-4 px-5 d-flex justify-content-between">
                <Link to="/home" className="text-decoration-none">
                    <h1 className="my-0 ms-5 fw-bold fs-2 text-uppercase">Start Framework</h1>
                </Link>

                <ul className="list-unstyled d-flex justify-content-center align-items-center me-5 my-auto">
                    <li className="me-3">
                        <NavLink
                            to="/about"
                            id="nav-link"
                            className={({ isActive }) => (isActive ? "text-uppercase text-decoration-none fw-bold px-2 py-2 rounded activ-link " : "text-uppercase px-2 py-2 text-decoration-none fw-bold")}>
                            About
                        </NavLink>
                    </li>
                    <li className="me-3">
                        <NavLink
                            to="/portfolio"
                            id="nav-link"
                            className={({ isActive }) => (isActive ? "text-uppercase text-decoration-none fw-bold px-2 py-2 rounded activ-link" : "text-uppercase px-2 py-2 text-decoration-none fw-bold")}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="me-3">
                        <NavLink
                            to="/contact"
                            id="nav-link"
                            className={({ isActive }) => (isActive ? "text-uppercase text-decoration-none fw-bold px-2 py-2 rounded activ-link" : "text-uppercase px-2 py-2 text-decoration-none fw-bold")}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>


    )
}

export default Navbar
