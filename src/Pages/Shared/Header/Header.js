import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="container-fluid">
        <CustomLink className="navbar-brand fw-bold" to="/">
          Financial Advisor
        </CustomLink>
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
                About
              </CustomLink>
            </li>
          </ul>
          <span className="navbar-text btn fw-bold">Login</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
