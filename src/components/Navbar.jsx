import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-5">
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
            <form className="d-flex" role="search">
              <button className="btn" type="submit">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
