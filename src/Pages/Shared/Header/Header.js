import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info container-fluid fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Financial Advisor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink className="nav-link" aria-current="page" to={`/home`}>
                Home
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                className="nav-link"
                aria-current="page"
                to={`/services`}
              >
                Services
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="blogs">
                Blogs
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="checkout">
                Checkout
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="about">
                About Me
              </CustomLink>
            </li>
          </ul>
          <Link
            to="login"
            className="navbar-text text-decoration-none fw-bold text-primary"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
