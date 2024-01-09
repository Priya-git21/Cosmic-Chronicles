import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default class Navbar extends Component {

    render() {
        // const notify = () => toast("This project section is currently under development. Thank you for your patience!");
        return (
            <div className="fontStyle mobile">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <center className="d-inline-block d-flex align-items-center justify-content-center vw-100">
                            <Link to="/" className="navbar-brand ">
                                <img
                                    src={process.env.PUBLIC_URL + "/1476.png"}
                                    alt="Logo"
                                    width="60"
                                    height="auto"
                                    className="d-inline-block align-text-top image"
                                />
                            </Link>
                            <h1 className="d-inline-block font"> Cosmic Chronicles</h1>
                        </center>
                    </div>
                </nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link link-light bg-body-tertiary"
                            activeClassName="border-white border-bottom-0"
                        >
                            Latest Updates
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/blogs"
                            className="nav-link link-light bg-body-tertiary"
                            activeClassName="border-white border-bottom-0"
                        >
                            Astro Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/apod"
                            className="nav-link link-light bg-body-tertiary"
                            activeClassName="border-white border-bottom-0"
                        >
                            Picture of the Day
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/launch"
                            className="nav-link link-light bg-body-tertiary"
                            activeClassName="border-white border-bottom-0"
                        >
                            Launch Bot
                        </NavLink>
                    </li>
                </ul>
                {/* <ToastContainer autoClose = {2000} theme = "dark" position = "top-center" /> */}
            </div>
        );
    }
}
