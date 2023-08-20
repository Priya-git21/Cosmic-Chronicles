import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import './Navbar-responsive.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Navbar extends Component {
    render() {

        const notify = () => toast("This project section is currently under development. Thank you for your patience!");

        return (
            <div className='fontStyle mobile'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <center className="d-inline-block d-flex align-items-center justify-content-center vw-100">
                            <Link to="/" className="navbar-brand ">
                                <img src={process.env.PUBLIC_URL + '/1476.png'} alt="Logo" width="60" height="auto" className="d-inline-block align-text-top image" />
                            </Link>
                            <h1 className='d-inline-block font'> Cosmic Chronicles</h1>
                        </center>
                    </div>
                </nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link link-light border-white border-bottom-0 bg-body-tertiary" aria-current="page" to="/">Latest Updates</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-light bg-body-tertiary"
                            aria-current="page"
                            to="/blogs"
                            onClick={notify}>
                            Astro Blogs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link link-light bg-body-tertiary"
                            aria-current="page"
                            to="/potd"
                            onClick={notify}>
                            Picture of the Day
                        </Link>
                    </li>
                </ul>
                <ToastContainer autoClose={2000} theme="dark" position="top-center" />
            </div>
        )
    }
}
