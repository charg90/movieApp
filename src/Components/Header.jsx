import React from "react";
import { Link } from "react-router-dom";
// components
import SearchBar from "./SearchBar";
import NavFavorite from "./NavFavorite";
//css
import styles from "./../styles/navBar.modules.css";
const Header = () => {
  console.log(styles);
  return (
    <>
      <header>
        <nav
          className={`${styles.backgroundNavbar} navbar navbar-expand-lg navbar-light`}
        >
          <Link className="navbar-brand text-white" to="/">
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            <NavFavorite />
          </div>
          <SearchBar />
        </nav>
      </header>
    </>
  );
};

export default Header;
