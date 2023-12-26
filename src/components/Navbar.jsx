import React from 'react'
import './Navbar.css'
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
        <div className="container">
          <a className="navbar-brand" href='#'><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-5">
                    <li className="nav-item">
                        <a className="nav-a active" aria-current="page" href='#'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href='#'>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href='#'>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href='#'>Blog</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn" type="submit">Contact Us</button>
                </form>
            </div>
        </div>
    </nav>
    </>
  )
}
