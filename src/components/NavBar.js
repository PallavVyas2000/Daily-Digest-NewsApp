import React from "react";
import logo from './logo192px.png';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  {/*replace "export class Navbar extends Component" with "const Navbar = () => " to convert it from a class based to a function bsed component */ }
  return (
    <div className="navbar-main-body">
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-center mx-2" />
            <strong>Daily Digest</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/categories/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'light' ? "Enable" : "Disable"} DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}