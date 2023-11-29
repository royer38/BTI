import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [ShowCarrito, Setshow] = useState(false);
  
    const handleCarritoShow = () => {
      Setshow(true);
      };
      const handleCarritofalse = () => {
        Setshow(false);
      };

  return (
    <nav className="navbar rd-navbar-nav-wrap navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold"
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown fw-bold">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseEnter={handleCarritoShow}
                onMouseLeave={handleCarritofalse}
              >
                Carrito
              </a>
              <ul className={`dropdown-menu ${ShowCarrito ? 'show' : ''}`} onMouseEnter={handleCarritoShow}
              onMouseLeave={handleCarritofalse}>
                <li>
                  <a className="dropdown-item" href="#">
                    ver carrito
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ---------------
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    pagar ahora
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
);
};
export default Navbar;
