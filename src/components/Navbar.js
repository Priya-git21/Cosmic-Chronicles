import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className='fontStyle'>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <center className="d-inline-block d-flex align-items-center justify-content-center vw-100">
                            <Link to="/" className="navbar-brand">
                                <img src={process.env.PUBLIC_URL + '/1476.png'} alt="Logo" width="60" height="auto" className="d-inline-block align-text-top" />
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
                        <Link className="nav-link link-light bg-body-tertiary" aria-current="page" to="/">Astro Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-light bg-body-tertiary" aria-current="page" to="/">Picture of the Day</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
