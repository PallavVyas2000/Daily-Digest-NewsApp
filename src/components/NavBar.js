import React, { Component } from "react";
import logo from "E:/Ethical Hacking - Programming/Web Development/React Course/newsapp/src/components/logo192.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-center mx-2" />
              <strong>Daily Digest</strong>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/general">
                    General
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/business">
                    Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/health">
                    Health
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/science">
                    Science
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/sports">
                    Sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/categories/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
