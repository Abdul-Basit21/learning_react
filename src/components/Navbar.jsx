import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ContactButton from "./buttons/ContactButton";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  // const toggle = false;
  const handleMenuClick = () => {
    setToggle(true);
    if (toggle == true) {
      setToggle(false);
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="light"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggle == true
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <a 
              href="#!"
              className="closeMenu position-absolute d-lg-none"
              onClick={() => {
                setToggle(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-lg-5">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <ContactButton />
          </div>
        </div>
      </nav>
    </>
  );
}
