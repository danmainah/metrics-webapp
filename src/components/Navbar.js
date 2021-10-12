import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar ">
    <div className="container-fluid">
      <div className="collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item m-3 text-black">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item m-3 text-black">
            <Link className="nav-link" to="/details">
              Details
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
