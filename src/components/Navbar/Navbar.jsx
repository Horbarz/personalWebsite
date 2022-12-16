import React from 'react'
import { Link } from "react-scroll"

function Navbar() {
    return (
        <header className="ms-static">
            <div className="container">
                <div className="nav-sec">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img src="assets/img/logo/logo.png" alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 ml-auto" id="top-menu">
                                    <li className="nav-item active">
                                        <a className="nav-link ms-nav" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link ms-nav" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link ms-nav" href="#experience">Experience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link ms-nav" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link ms-nav" href="#certificates">Certificates</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link ms-nav" href="#contact">Contact Us</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar